import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { loginService } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();

    try {
      const data = loginService(
        form.email,
        form.password
      );

      dispatch(loginSuccess(data));
      toast.success("Login success");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <form onSubmit={submit}>
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
          Login
        </button>
      </form>

      <p className="mt-5">
        No account? <Link to="/signup">Signup</Link>
      </p>
      </div>
    </Layout>
  );
}

export default Login;