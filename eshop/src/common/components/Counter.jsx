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
      <button
        onClick={handleDecrement}
        className="hover:text-green-400 p-2 text-4xl font-extrabold"
      >
        -
      </button>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        className="text-center text-xl rounded focus:outline-none appearance-none w-16"
      />
      <button
        onClick={handleIncrement}
        className="hover:text-green-400 p-2 text-4xl font-extrabold"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
