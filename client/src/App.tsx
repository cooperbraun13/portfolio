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
      <article className="text-page experience-page">
        <h1>experience</h1>
        <div className="experience-list">
          <section className="experience-item">
            <div>
              <h2>FAST Enterprises</h2>
              <p className="experience-role">Implementation Intern</p>
            </div>
            <p>
              Incoming implementation intern for summer 2026.
            </p>
          </section>

          <section className="experience-item">
            <div>
              <h2>
                Gonzaga University Institute for Information & Applied
                Technology
              </h2>
              <p className="experience-role">Research Assistant</p>
            </div>
            <p>
              Built a Python bracket analysis tool for Hoopfest, ingesting and
              joining multi-table CSV data across 20,000+ players and 500+
              brackets. Designed a composite fit-scoring system that surfaced
              750+ ranked swap suggestions and flagged outliers, then generated
              self-contained interactive HTML dashboards so non-technical
              tournament staff could review teams and compare placements.
            </p>
          </section>

          <section className="experience-item">
            <div>
              <h2>InterRoom</h2>
              <p className="experience-role">Software Engineer Intern</p>
            </div>
            <p>
              Built a Flask backend around a multi-channel outreach API,
              enabling automated email, LinkedIn webhook, and Reddit post
              delivery from one internal interface. Designed and deployed a
              Flask and PostgreSQL dashboard for campaign monitoring, then
              containerized services with Docker and added GitHub Actions CI/CD
              to improve uptime from 85% to 99%.
            </p>
          </section>
        </div>
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
            <a href="https://www.linkedin.com/in/cooper-braun-gu/">
              <svg
                aria-hidden="true"
                className="contact-icon"
                viewBox="0 0 24 24"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a href="mailto:cooperjbraun13@gmail.com">
              <svg
                aria-hidden="true"
                className="contact-icon"
                viewBox="0 0 24 24"
              >
                <path d="M3.5 5A2.5 2.5 0 0 0 1 7.5v9A2.5 2.5 0 0 0 3.5 19h17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 20.5 5h-17Zm0 2h17c.18 0 .35.05.49.13L12 12.64 3.01 7.13c.14-.08.31-.13.49-.13Zm-.5 2.22 8.48 5.2a1 1 0 0 0 1.04 0L21 9.22v7.28a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V9.22Z" />
              </svg>
              <span>email</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/cooperbraun13">
              <svg
                aria-hidden="true"
                className="contact-icon"
                viewBox="0 0 24 24"
              >
                <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.31-5.46-1.34-5.46-5.94 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
              </svg>
              <span>github</span>
            </a>
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
