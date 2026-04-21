const productsMapper = (products) => {
  if (!products) return null;

  return products.map((product) => {
    let status = "";

    if (product.stock > 0) {
      status = "active";
    } else {
      status = "out_of_stock";
    }
    return {
      id: product.productId,
      title: product.title,
      price: product.price,
      stock: product.stock,
      description: product.description,
      image: product.images[0],
      category: product.category,
      discount: product.discountPercentage,
      status: status,
    };
  });
};

export default productsMapper;
