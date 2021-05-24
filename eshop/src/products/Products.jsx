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
          <div className="bg-white shadow-sm rounded w-64 h-80 p-2">
            <div className="h-3/4">
              <img src={x.image} alt={x.title} className="max-h-full m-auto" />
            </div>
            <div className="text-center text-xl mt-1">{x.price}$</div>
            <div
              className=" text-center font-semibold truncate mt-1"
              title={x.title}
            >
              {x.title}
            </div>
            <div>Link</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
