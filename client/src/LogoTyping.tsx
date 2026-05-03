import { useEffect, useState } from "react";

export default function LogoTyping() {
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
    <a href="/" className="logo">
      {displayed}
      <span className="cursor">_</span>
    </a>
  );
}