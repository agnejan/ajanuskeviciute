import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../common/components/Card";

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
          <Card className="w-64 h-80" isRounded>
            <div className="h-3/4 flex">
              <img src={x.image} alt={x.title} className="max-h-full m-auto" />
            </div>
            <div
              className=" text-center font-semibold truncate mt-3"
              title={x.title}
            >
              {x.title}
            </div>
            <div className="text-center text-md">{x.price}$</div>

            <div className="text-center">
              <button>
                <Link
                  to="/product"
                  className="text-purple-400 hover:text-green-400 text-sm"
                >
                  VIEW
                </Link>
              </button>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default Products;
