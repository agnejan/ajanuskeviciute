import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      setProduct(product);
    };

    getProduct();
  }, [id]);

  return <div>Product Page {id}</div>;
}

export default Product;
