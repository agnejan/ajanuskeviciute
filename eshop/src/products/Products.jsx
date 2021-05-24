import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <ul>
      {products.map((x) => (
        <li key={x.id}>{x.title}</li>
      ))}
    </ul>
  );
}

export default Products;
