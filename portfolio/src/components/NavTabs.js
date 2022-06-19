// Import React
import React from "react";

// Set up function for the navigation tabs
function NavTabs({ currentPage, handlePageChange }) {
  return (
    // Return an unordered list
    <ul className="nav nav-tabs">
      {/* LIST ITEM # 1 - HOME  */}
      <li className="nav-item">
        <a
          href="home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>

      {/* LIST ITEM #2 - BLOG */}
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>
      {/* LIST ITEM #3 - CONTACT */}
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact{" "}
        </a>{" "}
      </li>
    </ul>
  );
}

// Export NavTabs
export default NavTabs;
