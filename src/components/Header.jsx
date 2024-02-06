import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3">
          <Link to="/">My Books</Link>
        </span>

        <div className="d-flex gap-2">
          <NavLink to="/">Main</NavLink>
          <NavLink to="/ürünler">Books</NavLink>
          <NavLink to="/kategori"> </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
