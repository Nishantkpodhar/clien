const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const otpGenerator =
  require("otp-generator");
const sendMail =
  require("../utils/sendMail");
const redis =
  require("../config/redis");

exports.register = async (
  req,
  res,
  next
) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;

    const exists =
      await User.findOne({
        email
      });

    if (exists) {
      return res.status(400).json({
        message:
          "User already exists"
      });
    }

    const hashed =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await User.create({
        name,
        email,
        password: hashed
      });

    res.status(201).json({
      user,
      token:
        generateToken(user._id)
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (
  req,
  res,
  next
) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({
        email
      });

    if (
      user &&
      (await bcrypt.compare(
        password,
        user.password
      ))
    ) {
      return res.json({
        user,
        token:
          generateToken(user._id)
      });
    }

    res.status(401).json({
      message:
        "Invalid credentials"
    });
  } catch (err) {
    next(err);
  }
};

exports.sendOtp =
  async (req, res) => {
    const { email } =
      req.body;

    const otp =
      otpGenerator.generate(6, {
        upperCaseAlphabets:
          false,
        specialChars: false
      });

    await redis.set(
      `otp:${email}`,
      otp,
      {
        EX: 300
      }
    );

    await sendMail(
      email,
      "ShopVerse OTP",
      `<h2>${otp}</h2>`
    );

    res.json({
      message: "OTP sent"
    });
  };

  exports.verifyOtp =
  async (req, res) => {
    const { email, otp } =
      req.body;

    const saved =
      await redis.get(
        `otp:${email}`
      );

    if (saved !== otp) {
      return res.status(400).json({
        message:
          "Invalid OTP"
      });
    }

    await redis.del(
      `otp:${email}`
    );

    res.json({
      message:
        "OTP verified"
    });
  };