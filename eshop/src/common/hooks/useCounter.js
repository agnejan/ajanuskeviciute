import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(1);

  function onIncrement() {
    if (count <= 0 || count === '') {
      setCount(1);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  }

  function onDecrement() {
    if (count <= 0 || count === '') {
      setCount(1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function onInputChange(event) {
    const val = event.target.value;
    const newVal = val === '' ? '' : parseInt(val);

    setCount(newVal);
  }

  return {
    count,
    onIncrement,
    onDecrement,
    onInputChange,
  };
}

export default useCounter;
