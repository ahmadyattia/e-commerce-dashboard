import { Product } from "@/types/product";
import { Image } from "@/types/image";
import slugify from "../../../utils/slugify";
import { useState, useEffect } from "react";
import convertToBase64 from "../../../utils/convertToBase64.js";
import { useCategories } from "./hooks/useCategories";

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
  const [isConvertingImages, setIsConvertingImages] = useState<boolean>(false);
  const { categories } = useCategories();

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

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    setIsConvertingImages(true);

    try {
      const base64Strings: string[] = await Promise.all(
        filesArray.map((file) => convertToBase64(file)),
      );

      const imagesObjectsArray: Image[] = base64Strings.map<Image>((string) => {
        return { url: string };
      });

      setForm({
        ...form,
        images: [...form.images, ...imagesObjectsArray],
      });
    } catch (error) {
      console.error("Error converting images to base64 string:", error);
    } finally {
      setIsConvertingImages(false);
    }
  };

  console.log(form);

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
      <select
        name="category"
        className="border p-2 rounded"
        onChange={(e) =>
          setForm({
            ...form,
            category: { ...form.category, name: e.target.value },
          })
        }
        value={form.category.name}
      >
        <option value="" disabled>
          select category
        </option>
        {categories.map((category) => {
          return <option value={category.name}>{category.name}</option>;
        })}
      </select>

      <input
        name="image"
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="border p-2 rounded"
      />

      <button type="submit" className="bg-black text-white py-2 rounded">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
