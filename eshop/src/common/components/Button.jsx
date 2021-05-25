import clsx from "clsx";

const defaultClasses =
  "focus:outline-none text-purple-200 hover:text-green-400 text-sm";

function Button({ className, children }) {
  return (
    <button className={clsx(defaultClasses, className)}>{children}</button>
  );
}

export default Button;
