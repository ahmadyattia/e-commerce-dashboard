const productMapper = (product) => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    stock: product.stock,
    description: product.description,
    image: product.image,
    category: product.category,
    discount: product.discount,
  };
};
