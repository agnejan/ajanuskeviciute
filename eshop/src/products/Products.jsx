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
          <div className="bg-white border shadow-sm rounded w-64 h-80">
            <div className="h-3/4">
              <img src={x.image} alt={x.title} className="max-h-full m-auto" />
            </div>
            <div>Price</div>
            <div>Title</div>
            <div>Link</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
