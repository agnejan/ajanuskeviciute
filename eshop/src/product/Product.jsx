import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../common/requests";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // const product = await response.json();

      const { data } = await axios(getProduct(id));

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return <div>Product Page {id}</div>;
}

export default Product;
