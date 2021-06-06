import { useParams } from "react-router";

function Product() {
  const { id } = useParams();

  console.log("route params", id);
  return <div>Product Page {id}</div>;
}

export default Product;
