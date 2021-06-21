import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

const dotsIntervalInMs = 300;

function Spinner({ text = 'Loading' }) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prev) => (prev === '...' ? '' : prev + '.'));
    }, dotsIntervalInMs);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='h-full flex justify-center items-center flex-col'>
      <Loader type='ThreeDots' color='#EF4444' height={100} width={100} />
      <div className='font-semibold text-purple-700 flex'>
        <span>{text}</span>
        <span className='w-3'>{dots}</span>
      </div>
    </div>
  );
}

export default Spinner;
