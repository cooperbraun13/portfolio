import LogoTyping from "./LogoTyping";

type HeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

function Header({ currentPath, onNavigate }: HeaderProps) {
  const links = [
    { path: "/resume", label: "resume" },
    { path: "/experience", label: "experience" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <header className="header">
      <LogoTyping onNavigate={onNavigate} />
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li className="nav-list-item" key={link.path}>
              <a
                aria-current={currentPath === link.path ? "page" : undefined}
                href={link.path}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(link.path);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
