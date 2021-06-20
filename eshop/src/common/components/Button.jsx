import { Link } from 'react-router-dom';
import clsx from 'clsx';

const typeClassMap = {
  default: 'text-purple-700 hover:text-green-400',
  primary: 'text-white bg-purple-700 hover:bg-green-400',
};
const disabledClasses = 'bg-gray-100 cursor-default text-gray-400';
const initialClasses = 'focus:outline-none text-sm p-2 rounded font-semibold';

function Button({
  type = 'default',
  className,
  children,
  to,
  disabled,
  onClick,
}) {
  const mergedClasses = clsx(
    initialClasses,
    disabled ? disabledClasses : typeClassMap[type],
    className
  );

  if (to) {
    return (
      <Link
        to={to}
        className={mergedClasses}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
