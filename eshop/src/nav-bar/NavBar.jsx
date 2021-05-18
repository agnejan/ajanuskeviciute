import NavItem from "./components/NavItem";

const navItems = [
  { text: "PRODUCTS", route: "/" },
  { text: "VISION", route: "/vision" },
];

function NavBar() {
  return (
    <nav className="bg-red-500">
      <ul className="flex">
        {navItems.map((x) => (
          <NavItem {...x} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
