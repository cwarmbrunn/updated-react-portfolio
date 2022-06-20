import React from "react";
import catNameGenerator from "../../assets/cat-name-generator-1.jpg";
import timedQuiz from "../../assets/timed-quiz.jpg";
import budgetTracker from "../../assets/budget-tracker.jpg";
import techBlog from "../../assets/developer-tech.jpg";
import cityApp from "../../assets/city-app.png";
import weatherDashboard from "../../assets/weathergif.gif";

export default function Portfolio() {
  return (
    <div>
      {/* PROJECT #1 - IT TAKES A CITY */}
      <h2 className="alert text-center title-1">It Takes A City</h2>
      <img
        src={cityApp}
        width="70%"
        className="mx-auto d-block mb-1 mt-2"
        alt="A web application that allows users to create and comment on local resources that users provide."
      />
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Project Overview:</strong> An application that provides
        information for people in need of resources (e.g. food, shelters, etc.).
        As a user, they would have the ability to add a new food bank
        information as a resource and add it to the database. Other logged in
        users can comment on the various posts.
      </p>
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Role:</strong> Acted as Frontend/Backend Developer (.ejs,
        JavaScript, Tailwind, etc.) and Program Manager
      </p>
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Technologies Used:</strong> JavaScript, Express.js, Sequelize,
        dotenv, Tailwind, MySQL2, Auth0
      </p>
      <p className="text-center fw-bold mx-4 mt-2 ">
        <a
          href="https://it-takes-a-city.herokuapp.com"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Deployed Site{" "}
        </a>
      </p>
      <p className="text-center fw-bold mx-4 mt-2">
        <a
          href="https://github.com/cwarmbrunn/it-takes-a-city"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Repository{" "}
        </a>
      </p>

      {/* PROJECT #2 - CAT NAME GENERATOR */}
      <h2 className="alert text-center title-1"> Cat Name Generator 🐱</h2>
      <img
        src={catNameGenerator}
        width="70%"
        className="mx-auto d-block mb-1 mt-2"
        alt=" a screenshot of the Cat Name Generator site"
      />
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Project Overview:</strong> Creating a site that will allow users
        to "like" or "dislike" photos of random cats. Once they've picked a cat
        photo, they can generate a name for it. If they dislike it, they can
        generate the name again.
      </p>

      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Role:</strong> Acted as Frontend and Backend Developer -
        designed base HTML/CSS and made initial API call with JavaScript.
      </p>

      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Technologies Used:</strong> JavaScript, HTML, CSS, Font Awesome
        CSS Icons, JQuery, Tailwind CSS, The Cat API, and Random User API
      </p>
      <p className="text-center fw-bold mx-4 ">
        <a
          href="https://cwarmbrunn.github.io/cat-name-generator/"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Deployed Site{" "}
        </a>
      </p>
      <p className="text-center fw-bold mx-4 ">
        <a
          href="https://github.com/cwarmbrunn/cat-name-generator"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Repository{" "}
        </a>
      </p>

      {/* PROJECT #3 - CODING QUIZ */}
      <h2 className="alert text-center title-1">Coding Quiz</h2>
      <img
        src={timedQuiz}
        width="70%"
        className="mx-auto d-block mb-1"
        alt="A screenshot of a timed quiz application with questions displayed"
      />
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Project Overview:</strong> Building a responsive site that
        allows users to take timed quizzes to test their Web API knowledge. Once
        all answers are completed, or the timer runs to zero, the user will be
        able to save their high score and initials.
      </p>
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Role:</strong> Acted as Frontend Developer - designed base
        HTML/CSS and JavaScript
      </p>

      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Technologies Used:</strong> JavaScript, HTML, CSS, Font Awesome
        CSS Icons, JQuery, Tailwind CSS, The Cat API, and Random User API
      </p>
      <p className="text-center fw-bold mx-4 mt-2">
        <a
          href="https://cwarmbrunn.github.io/coding-quiz/"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Deployed Site{" "}
        </a>
      </p>
      <p className="text-center fw-bold mx-4 mt-2">
        <a
          href="https://github.com/cwarmbrunn/coding-quiz"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Repository{" "}
        </a>
      </p>

      {/* PROJECT #4 - BUDGET TRACKER APP */}
      <h2 className="alert text-center title-1">Budget Tracker App</h2>
      <img
        src={budgetTracker}
        width="70%"
        className="mx-auto d-block mb-1"
        alt="A screenshot of a budget tracking application displaying several test transactions and a line graph showing a cash flow over a period of time"
      />
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Project Overview:</strong> Making updates to an existing budget
        tracker application to allow for offline access and functionality. This
        will allow users to add expenses and deposits to their budget with or
        without an internet connection. If the users enter a transaction
        offline, the total will be updated when they are back online.
      </p>
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Role:</strong> Acted as Backend/Frontend Developer - designed
        base JavaScript, HTML, CSS and leveraged Morgan, Express.js, and
        Mongoose. Deployed via Heroku.
      </p>

      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Technologies Used:</strong> JavaScript, Mongoose, Morgan, HTML,
        CSS, Heroku, and Express.js
      </p>
      <p className="text-center fw-bold mx-4 mt-2 ">
        <a
          href="https://secret-springs-00862.herokuapp.com"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Deployed Site{" "}
        </a>
      </p>
      <p className="text-center fw-bold mx-4 mt-2">
        <a
          href="https://github.com/cwarmbrunn/offline-budget-tracker"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Repository{" "}
        </a>
      </p>

      {/* PROJECT #5 - DEVELOPER TECH BLOG */}
      <h2 className="alert text-center title-1"> Developer Tech Blog</h2>
      <img
        src={techBlog}
        width="70%"
        className="mx-auto d-block mb-1 mt-2"
        alt="A screenshot of a Wordpress-styled site with options to read and create posts that other users can comment on."
      />
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Project Overview:</strong> Creating a CMS style blog similar to
        Wordpress, where developers can publish their blog posts and comment on
        other developer's posts as well. This app follows the MVC paradigm in
        its architectural structure, using Handlebars.js as the templating
        language, Sequelize as the ORM, and the express-session npm package for
        authentication.
      </p>
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Role:</strong> Acted as Frontend/Backend developer - leveraged
        CSS, MYSQL2, Express.js, etc.
      </p>

      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Technologies Used:</strong> JavaScript, CSS, Express.js,
        Handlebars.js, Sequelize, MySQL2, bcrypt, and dotenv
      </p>
      <p className="text-center fw-bold mx-4 mt-2 ">
        <a
          href="https://tranquil-retreat-22206.herokuapp.com"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Deployed Site{" "}
        </a>
      </p>
      <p className="text-center fw-bold mx-4 mt-2">
        <a
          href="https://github.com/cwarmbrunn/developer-tech-blog"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Repository{" "}
        </a>
      </p>

      {/* PROJECT #6 - WEATHER DASHBOARD */}
      <h2 className="alert text-center title-1"> Weather Dashboard </h2>
      <img
        src={weatherDashboard}
        width="70%"
        className="mx-auto d-block mb-1 mt-2"
        alt="A dashboard that allows you to view the 7-day forecase for a input city."
      />
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Project Overview:</strong> Creating a weather dashboard with
        form inputs that displays the current and five-day forecast for various
        cities. When a user clicks on a city from their search history, the city
        information will re-load and display on the screen.
      </p>
      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Role:</strong> Acted as Frontend/Backend Developer - designed
        base HTML/CSS and leveraged Bootstrap. Used jQuery, JavaScript, and
        OpenWeather One Call API.
      </p>

      <p className="mx-auto d-block mb-1 mt-2">
        <strong>Technologies Used:</strong> JavaScript, HTML, CSS, Bootstrap,
        Open Weather One Call API, jQuery
      </p>
      <p className="text-center fw-bold mx-4 mt-2">
        <a
          href="https://cwarmbrunn.github.io/weather-dashboard/"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Deployed Site{" "}
        </a>
      </p>
      <p className="text-center fw-bold mx-4 mt-2 mb-5">
        <a
          href="https://github.com/cwarmbrunn/weather-dashboard"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Repository{" "}
        </a>
      </p>
      <footer className=" mt-4 mx-auto d-block mb-1 text-center">
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
