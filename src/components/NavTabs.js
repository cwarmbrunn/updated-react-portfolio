// Import React
import React from "react";

// Set up function for the navigation tabs
function NavTabs({ currentPage, handlePageChange }) {
  return (
    // Return an unordered list
    <nav className="fw-bold">
      <ul className="nav nav-tabs">
        {/* LIST ITEM # 1 - HOME  */}
        <li className="nav-item">
          <a
            href="home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Christina Warmbrunn ✨
          </a>
        </li>

        {/* LIST ITEM #2 - PORTFOLIO */}
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        {/* LIST ITEM #3 - CONTACT */}
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact{" "}
          </a>{" "}
        </li>
        {/* LIST ITEM #4 - RESUME  */}
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            {" "}
            Resume{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Export NavTabs
export default NavTabs;
