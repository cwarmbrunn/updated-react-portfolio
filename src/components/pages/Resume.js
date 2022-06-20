import React from "react";

export default function Resume() {
  return (
    <body>
      <h2 className="mx-3 mt-4 text-center">Technical Skills</h2>
      <p className="mx-3 text-center">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>JSX</li>
          <li>Auth0</li>
          <li>Handlebars</li>
          <li>React</li>
          <li>Progressive Web Applications</li>
          <li>Insomnia</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </p>
      <h1 className="mx-3 mt-4 text-center">Resume</h1>
      <p className="mx-3 text-center">
        Download my resume{" "}
        <span>
          <a
            href="https://www.canva.com/design/DAE39JR_TYY/RbUFgV6-cNfvT9mBq3y-1A/view?utm_content=DAE39JR_TYY&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </span>
      </p>
      <footer className="mx-auto d-block mb-1 text-center">
        <p>
          ©️ Christina Warmbrunn{" "}
          <span className="mx-auto d-block">
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/christina-warmbrunn/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            ,{" "}
            <a
              href="https://github.com/cwarmbrunn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            , or{" "}
            <a
              href="https://stackoverflow.com/users/17689187/cwarmbrunn"
              target="_blank"
              rel="noreferrer"
            >
              Stack Overflow
            </a>
          </span>
        </p>
      </footer>
    </body>
  );
}
