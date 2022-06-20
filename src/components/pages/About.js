import React from "react";
import profilePic from "../../assets/Korilakkuma Mask.jpg";

export default function About() {
  return (
    <div>
      <img
        src={profilePic}
        width="50%"
        className="mx-auto d-block mb-1"
        alt="A small stuffed white bear (Korilakkuma) sitting on a white bed, wearing a white face mask and holding a Nintendo 3DS with Animal Crossing on the screen."
      />
      <h1> About Me!</h1>
      <p className="main-content">
        I'm a Full Stack Developer with a background in Program Management and
        responsive web development. I'm looking to collaborate on exciting
        projects that promote accessibility and educate others on the
        intersections between innovative technology and DEI work! Excited to
        combine my PM experience with my technical knowledge of HTML, CSS,
        JavaScript, Node.js, and more to create accessible and user-friendly
        applications and sites.
      </p>
    </div>
  );
}
