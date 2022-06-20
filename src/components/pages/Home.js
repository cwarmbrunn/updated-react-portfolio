import React from "react";
import profilePic from "../../assets/Korilakkuma Mask.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="mx-3 text-center">About Me</h1>
      <img
        src={profilePic}
        width="25%"
        className="mx-auto d-block mb-1"
        alt="A small stuffed white bear (Korilakkuma) sitting on a white bed, wearing a white face mask and holding a Nintendo 3DS with Animal Crossing on the screen."
      />
      <p className="mx-5">
        {" "}
        I'm Christina Warmbrunn - I'm a Program Manager by day, coder by night.
        I'm a Full Stack Developer with a background in Program Management and
        responsive web development. I'm looking to collaborate on exciting
        projects that promote accessibility and educate others on the
        intersections between innovative technology and DEI work! Excited to
        combine my PM experience with my technical knowledge of HTML, CSS,
        JavaScript, Node.js, and more to create accessible and user-friendly
        applications and sites.
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
    </div>
  );
}
