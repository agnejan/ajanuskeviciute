import Button from './Button';

const buttonClass =
  'text-3xl font-extrabold p-1 transform transition hover:-translate-y-0.5 active:translate-y-0.5 duration-200';

function Counter({
  className,
  count,
  onIncrement,
  onDecrement,
  onInputChange,
}) {
  return (
    <div className={className}>
      <Button onClick={onDecrement} className={buttonClass}>
        -
      </Button>
      <input
        type='number'
        value={count}
        onChange={onInputChange}
        className='text-center text-xl rounded focus:outline-none w-12'
      />
      <Button onClick={onIncrement} className={buttonClass}>
        +
      </Button>
    </div>
  );
}

export default Counter;
