
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
