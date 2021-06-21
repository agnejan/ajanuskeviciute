const fakeStoreApiUrl = 'https://fakestoreapi.com';

export const getProducts = {
  method: 'get',
  url: `${fakeStoreApiUrl}/products`,
};

export const getProduct = (id) => ({
  method: 'get',
  url: `${fakeStoreApiUrl}/products/${id}`,
});

export const addToCart = (productId, quantity) => ({
  method: 'post',
  url: `${fakeStoreApiUrl}/carts`,
  data: { userId: 5, products: [{ productId, quantity }] },
});
