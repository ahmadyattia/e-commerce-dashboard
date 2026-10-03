import { Product } from "@/types/product";
import slugify from "../../../utils/slugify";
import { useState, useEffect } from "react";
import convertToBase64 from "@/utils/convertToBase64";

interface ProductFormProps {
  onSubmit: () => void;
  editingProduct: Product | null;
}

function ProductForm({ onSubmit, editingProduct }: ProductFormProps) {
  const [form, setForm] = useState<Product>({
    title: "",
    price: 0,
    images: [],
    category: {
      name: "",
      slug: "",
      image: "",
    },
    description: "",
    slug: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();

    // slugify the title and category's name and save as properties as expected
    const finalProductData: Product = {
      ...form,
      slug: slugify(form.title),
      category: { ...form.category, slug: slugify(form.category.name) },
    };
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const imageURL = reader.result as string; // image url in base64

      setForm({
        ...form,
        images: [...form.images, { url: imageURL }],
      });
    };
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="title"
        placeholder="Product title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="price"
        placeholder="Product price"
        value={form?.price}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="description"
        placeholder="Product description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="category"
        placeholder="Product category"
        value={form.category.name}
        onChange={(e) =>
          setForm({
            ...form,
            category: { ...form.category, name: e.target.value },
          })
        }
        className="border p-2 rounded"
      />
      <input
        name="image"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleImageChange}
      />

      <button type="submit" className="bg-black text-white py-2 rounded">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
