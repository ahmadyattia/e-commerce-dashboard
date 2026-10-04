import { Product } from "@/types/product";
import { Image } from "@/types/image";
import slugify from "../../../utils/slugify";
import { useState, useEffect, useMemo } from "react";
import convertToBase64 from "../../../utils/convertToBase64.js";
import { useCategories } from "./hooks/useCategories";
import { api } from "../../../services/api";
import { Category } from "@/types/category";

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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isSameForm = useMemo(() => {
    if (!editingProduct) return false;

    if (
      editingProduct.title === form.title &&
      editingProduct.description === form.description &&
      editingProduct.price === form.price &&
      editingProduct.category.id === form.category.id &&
      JSON.stringify(editingProduct.images) === JSON.stringify(form.images)
    ) {
      return true;
    }

    return false;
  }, [form, editingProduct]);

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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    // slugify the title and category's name and save as properties as expected
    const finalProductData: Product = {
      ...form,
      slug: slugify(form.title),
      category: { ...form.category, slug: slugify(form.category.name) },
    };

    try {
      if (
        editingProduct &&
        editingProduct.id &&
        editingProduct.id === finalProductData.id
      ) {
        // update an existing product
        await api.put(`/products/${editingProduct.id}`, finalProductData);
        alert("Product updated successfully!");
      } else {
        // insert new product
        await api.post("/products", finalProductData);
        alert("Product added successfully!");
      }
    } catch (error) {
      console.error("Error performing operation:", error);
      setError("Error performing operation...");
    } finally {
      setLoading(false);
      onSubmit();
    }
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

  const deleteImage = (image: Image) => {
    if (!form.images.includes(image)) return;

    const remainingImages = form.images.filter((existingImage) => {
      return existingImage.url !== image.url;
    });

    setForm({
      ...form,
      images: [...remainingImages],
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;

    const selectedCategory = categories.find(
      (category) => category.id === parseInt(categoryId, 10),
    ) as Category;

    setForm({
      ...form,
      category: selectedCategory,
    });
  };

  console.log(form);
  // console.log(editingProduct);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="title"
        placeholder="Product title"
        value={form.title}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="price"
        placeholder="Product price"
        value={form?.price === 0 ? "" : form?.price}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="description"
        placeholder="Product description"
        value={form.description}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <select
        name="category"
        className="border p-2 rounded"
        required
        onChange={handleCategoryChange}
        value={form.category.id ? form.category.id : ""}
      >
        <option value="" disabled>
          select category
        </option>
        {categories.map((category) => {
          return <option value={category.id}>{category.name}</option>;
        })}
      </select>

      <label htmlFor="images">Images:</label>
      <input
        name="image"
        id="images"
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="border p-2 rounded"
      />
      <div className="flex gap-2 overflow-auto">
        {form.images &&
          form.images.map((image) => {
            return (
              <div className="relative">
                <img className="w-h h-25 object-cover" src={image.url} />
                <span
                  onClick={() => deleteImage(image)}
                  className="inline-block absolute top-1 right-1 rounded-full w-6 h-6 text-center bg-red-500/60 cursor-pointer"
                >
                  X
                </span>
              </div>
            );
          })}
      </div>

      <button
        type="submit"
        disabled={isSameForm}
        className={
          isSameForm
            ? "bg-gray-500 text-white py-2 rounded"
            : "bg-black text-white py-2 rounded"
        }
      >
        Save
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default ProductForm;
