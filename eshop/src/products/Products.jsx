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
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <li key={x.id} className="p-3">
          <div className="bg-white border shadow-sm rounded w-64 h-80"></div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
