import clsx from "clsx";

const defaultClasses = "bg-white shadow-sm p-2";

function Card({ className, children, isRounded }) {
  return (
    <div className={clsx(defaultClasses, className, isRounded && "rounded")}>
      {children}
    </div>
  );
}

export default Card;
