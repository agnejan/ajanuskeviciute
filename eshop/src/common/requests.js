export const getProducts = {
  method: "get",
  url: "https://fakestoreapi.com/products",
};

export const getProduct = (id) => ({
  method: "get",
  url: `https://fakestoreapi.com/products${id}`,
});
