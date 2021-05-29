import clsx from "clsx";
import { Link } from "react-router-dom";

const defaultClasses =
  "focus:outline-none text-purple-200 hover:text-green-400 hover:text-bold text-sm";

function Button({ className, children, to }) {
  const mergedClasses = clsx(defaultClasses, className);

  if (to) {
    return <Link className={mergedClasses}>{children}</Link>;
  }

  return <button className={mergedClasses}>{children}</button>;
}

export default Button;
