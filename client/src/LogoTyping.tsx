import { useEffect, useState } from "react";

type LogoTypingProps = {
  onNavigate: (path: string) => void;
};

export default function LogoTyping({ onNavigate }: LogoTypingProps) {
  const text = "> cooper braun";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="/"
      className="logo"
      onClick={(event) => {
        event.preventDefault();
        onNavigate("/");
      }}
    >
      {displayed}
      <span className="cursor">_</span>
    </a>
  );
}
