import { useState } from "react";

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
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={count} onChange={handleInputChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
