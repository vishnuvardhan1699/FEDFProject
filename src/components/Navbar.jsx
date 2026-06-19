function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🍽 College Cafeteria
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#menu">Menu</a>
        </li>

        <li>
          <a href="#orders">Orders</a>
        </li>
      </ul>

      <div className="cart-icon">
        🛒 {cart.length}
      </div>
    </nav>
  );
}

export default Navbar;