import { useState, useEffect } from "react";

function ProductForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    stock: "",
    image: "",
    category: "",
    description: "",
    discount: "",
    id: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="title"
        placeholder="Product title"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="price"
        placeholder="Product price"
        value={form.price}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="stock"
        placeholder="Product stock"
        value={form.stock}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button type="submit" className="bg-black text-white py-2 rounded">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
