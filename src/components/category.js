import * as React from "react";
import { Link } from "gatsby";

const Category = () => {
  return (
    <div>
      <h1>Link Navigation</h1>
      <ul>
        <Link to="/">
          <li>Index</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Category;
