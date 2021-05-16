import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-red-500">
      <ul className="flex">
        <li className="p-2">
          <Link to="/">PRODUCTS</Link>
        </li>
        <li className="p-2">
          <Link to="/vision">VISION</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
