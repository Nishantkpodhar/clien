import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToInventory } from "../../redux/sellerSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    price: "",
    stock: "",
  });

  const submit = (e) => {
    e.preventDefault();

    dispatch(addProductToInventory(form));

    setForm({
      title: "",
      price: "",
      stock: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold mb-5">
        Add Product
      </h2>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({
            ...form,
            price: e.target.value,
          })
        }
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        placeholder="Stock"
        value={form.stock}
        onChange={(e) =>
          setForm({
            ...form,
            stock: e.target.value,
          })
        }
        className="w-full border p-3 rounded-xl mb-4"
      />

      <button className="bg-violet-600 text-white px-6 py-3 rounded-xl">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;