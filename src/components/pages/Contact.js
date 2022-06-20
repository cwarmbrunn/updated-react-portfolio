import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag" className="text-center mx-4">
        Contact Me!
      </h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="text-center mx-4">
          <label htmlFor="name" className="mx-3">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Christina Warmbrunn"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="text-center mx-4 mt-3">
          <label htmlFor="email" className="mx-3">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            placeholder="hello@me.com"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="text-center mx-4 mt-3">
          <label htmlFor="message" className="mx-3">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Hello World!"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        <div className="mx-4 mt-3 mb-4 text-center">
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit" className="mx-auto">
            Submit
          </button>
        </div>
      </form>
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
    </section>
  );
}

export default ContactForm;
