import clsx from 'clsx';
import { Link } from 'react-router-dom';

const defaultClasses =
  'focus:outline-none text-purple-700 hover:text-green-400 text-sm';

function Button({ className, children, to, onClick }) {
  const mergedClasses = clsx(defaultClasses, className);

  if (to) {
    return (
      <Link to={to} className={mergedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
