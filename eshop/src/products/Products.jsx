import axios from "axios";
import { useEffect, useState } from "react";
import { getProducts } from "../common/requests";
import ProductCard from "./components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios(getProducts);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <ProductCard
          key={x.id}
          id={x.id}
          title={x.title}
          image={x.image}
          price={x.price}
        />
      ))}
    </ul>
  );
}

export default Products;
