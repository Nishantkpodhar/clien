exports.createPayment = async (
  req,
  res
) => {
  const {
    amount,
    method,
  } = req.body;

  res.json({
    paymentId:
      "PAY_" + Date.now(),
    amount,
    method,
    status: "Success",
  });
};
const Coupon =
  require("../models/Coupon");

exports.validateCoupon =
  async (req, res) => {
    const coupon =
      await Coupon.findOne({
        code: req.body.code,
        active: true
      });

    if (!coupon) {
      return res.status(404).json({
        message:
          "Invalid coupon"
      });
    }

    res.json(coupon);
  };
  const stripe =
  require("../config/stripe");
const Payment =
  require("../models/Payment");

exports.createCheckout =
  async (req, res) => {
    const session =
      await stripe.checkout.sessions.create(
        {
          payment_method_types: [
            "card"
          ],

          line_items:
            req.body.items.map(
              (item) => ({
                price_data: {
                  currency: "inr",
                  product_data: {
                    name:
                      item.title
                  },
                  unit_amount:
                    item.discountPrice *
                    100
                },
                quantity:
                  item.qty
              })
            ),

          mode: "payment",

          success_url:
            "http://localhost:3000/success",

          cancel_url:
            "http://localhost:3000/cancel"
        }
      );

    res.json({
      id: session.id
    });
  };

exports.savePayment =
  async (req, res) => {
    const payment =
      await Payment.create({
        user: req.user._id,
        ...req.body
      });

    res.json(payment);
  };