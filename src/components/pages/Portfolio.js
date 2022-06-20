import React from "react";
import catNameGenerator from "../../assets/cat-name-generator-1.jpg";
import timedQuiz from "../../assets/timed-quiz.jpg";
export default function Portfolio() {
  return (
    <div>
      {/* PROJECT #1 - CAT NAME GENERATOR */}
      <h2 className="alert text-center title-1"> Cat Name Generator 🐱</h2>
      <img
        src={catNameGenerator}
        width="50%"
        className="mx-auto d-block mb-1"
        alt=" a screenshot of the Cat Name Generator site"
      />
      <p className="mx-auto d-block mb-1">
        <strong>Project Overview:</strong> Creating a site that will allow users
        to "like" or "dislike" photos of random cats. Once they've picked a cat
        photo, they can generate a name for it. If they dislike it, they can
        generate the name again.
      </p>

      <p className="mx-auto d-block mb-1">
        <strong>Role:</strong> Acted as Frontend and Backend Developer -
        designed base HTML/CSS and made initial API call with JavaScript.
      </p>

      <p className="mx-auto d-block mb-1">
        <strong>Technologies Used:</strong> JavaScript, HTML, CSS, Font Awesome
        CSS Icons, JQuery, Tailwind CSS, The Cat API, and Random User API
      </p>
      {/* PROJECT #2 - CODING QUIZ */}
      <h2 className="alert text-center title-1">Coding Quiz</h2>
      <img
        src={timedQuiz}
        width="50%"
        className="mx-auto d-block mb-1"
        alt="A screenshot of a timed quiz application with questions displayed"
      />
      <p className="mx-auto d-block mb-1">
        <strong>Project Overview:</strong> Building a responsive site that
        allows users to take timed quizzes to test their Web API knowledge. Once
        all answers are completed, or the timer runs to zero, the user will be
        able to save their high score and initials.
      </p>
      <p className="mx-auto d-block mb-1">
        <strong>Role:</strong> Acted as Frontend Developer - designed base
        HTML/CSS and JavaScript
      </p>
      <p className="mx-auto d-block mb-1">
        <strong>Technologies Used:</strong> JavaScript, CSS, HTML
      </p>
    </div>
  );
}
