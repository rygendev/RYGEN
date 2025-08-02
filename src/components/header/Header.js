import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header glass-header">
      <div className="container">
        <div className="logo">RYGEN</div>
        <nav className="nav">
          <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>Home</Link>
          <Link to="/apps" className={isActive('/apps') ? 'nav-link active' : 'nav-link'}>Apps</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>About</Link>
          <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
