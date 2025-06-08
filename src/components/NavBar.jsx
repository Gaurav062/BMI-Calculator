import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">BMI APP</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/know" className="navbar-link">Know more</Link>
      </div>
    </nav>
  );
}

export default NavBar;
