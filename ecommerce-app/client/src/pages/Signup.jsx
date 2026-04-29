import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { signupService } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();

    const data = signupService(form);

    dispatch(loginSuccess(data));
    navigate("/");
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Signup
      </h1>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button className="w-full bg-violet-600 text-white py-3 rounded-xl">
          Signup
        </button>
      </form>

      <p className="mt-5">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </div>
    </Layout>
  );
}

export default Signup;