import LogoTyping from "./LogoTyping";

function Header() {
  return (
    <header className="header">
      <LogoTyping />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">resume</li>
          <li className="nav-list-item">experience</li>
          <li className="nav-list-item">contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
