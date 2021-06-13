import { useState } from 'react';
import Button from './Button';

const buttonClass =
  'text-3xl font-extrabold p-1 transform hover:-translate-y-0.5 active:translate-y-0.5 duration-200';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleInputChange(event) {
    const val = event.target.value;
    if (!val) {
      setCount(1);
    } else {
      setCount(parseInt(val));
    }
  }

  return (
    <div>
      <Button onClick={handleDecrement} className={buttonClass}>
        -
      </Button>
      <input
        type='number'
        value={count}
        onChange={handleInputChange}
        className='text-center text-xl rounded focus:outline-none w-12'
      />
      <Button onClick={handleIncrement} className={buttonClass}>
        +
      </Button>
    </div>
  );
}

export default Counter;
