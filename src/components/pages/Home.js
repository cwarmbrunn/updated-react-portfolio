import React from "react";
import profilePic from "../../assets/Korilakkuma Mask.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="mx-3">About Me</h1>
      <img
        src={profilePic}
        width="10%"
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
    </div>
  );
}
