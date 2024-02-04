export function getProducts(req, res) {
  console.log(req.session);
  const products = [
    { name: "Product 1", price: 19.99 },
    { name: "Product 2", price: 29.99 },
  ];

  res.render("products/index", { products });
}
