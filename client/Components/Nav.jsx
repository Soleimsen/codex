import React from "react";
import { Link, Router, Route } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/browse">Browse</Link>
          </div>
          <div>
            <Link to="/does-not-exist">NoPage</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;