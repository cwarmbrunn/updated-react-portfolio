// Import React and use State
import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    // If page is on "Home" - render the Home page
    if (currentPage === "Home") {
      return <Home />;
    }
    // If page is on "About" - render the About page
    if (currentPage === "About") {
      return <About />;
    }
    // If page is on "Blog" - render the Blog page
    if (currentPage === "Blog") {
      return <Blog />;
    }

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing the currentPage from state within a function to update it  */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Now we call the renderPage method which will return a single component */}
      {renderPage()}
    </div>
  );
}
