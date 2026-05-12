import Intro from "./Intro.tsx";
import Header from "./Header.tsx";
import { useEffect, useState } from "react";
import resumePdf from "./assets/cooperbraunportfolioresume.pdf";

const routes = new Set(["/", "/resume", "/experience", "/contact"]);

function getCurrentPath() {
  return routes.has(window.location.pathname) ? window.location.pathname : "/";
}

function ResumePage() {
  return (
    <main className="page resume-page">
      <div className="page-heading">
        <h1>resume</h1>
        <a className="text-link" href={resumePdf} download>
          download pdf
        </a>
      </div>

      <div className="resume-frame">
        <object aria-label="Resume" data={resumePdf} type="application/pdf">
          <a className="text-link" href={resumePdf} download>
            download pdf
          </a>
        </object>
      </div>
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="page">
      <article className="text-page">
        <h1>experience</h1>
        <h2>role title</h2>
        <p>
          Add a paragraph about the role, the team, what you built, and the
          impact of your work.
        </p>
      </article>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="page">
      <article className="text-page">
        <h1>contact</h1>
        <ul className="contact-list">
          <li>
            <a href="https://www.linkedin.com/in/cooper-braun-gu/">linkedin</a>
          </li>
          <li>
            <a href="mailto:cooperjbraun13@gmail.com">email</a>
          </li>
          <li>
            <a href="https://github.com/cooperbraun13">github</a>
          </li>
        </ul>
      </article>
    </main>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path: string) {
    if (path === currentPath) return;

    window.history.pushState(null, "", path);
    setCurrentPath(path);
  }

  const page = {
    "/": <Intro />,
    "/resume": <ResumePage />,
    "/experience": <ExperiencePage />,
    "/contact": <ContactPage />,
  }[currentPath];

  return (
    <>
      <Header currentPath={currentPath} onNavigate={navigate} />
      {page}
    </>
  );
}

export default App;
