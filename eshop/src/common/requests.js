export const getProducts = {
  method: "get",
  url: "https://fakestoreapi.com/products",
};

export function getProduct(id) {
  return {
    method: "get",
    url: `https://fakestoreapi.com/products/${id}`,
  };
}
