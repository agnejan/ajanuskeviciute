import axios from 'axios';
import { useEffect, useState } from 'react';
import { getProducts } from '../common/requests';
import ProductCard from './components/ProductCard';
import Spinner from '../common/components/Spinner';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios(getProducts);
      setIsLoading(false);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Spinner text='Fetching products' />;
  }

  return (
    <ul className='flex flex-wrap'>
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
