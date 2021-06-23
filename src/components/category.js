import * as React from "react";
import { Link } from "gatsby";

const Category = () => {
  return (
    <ul>
      <Link to="/">
        <li>Index</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  );
};

export default Category;
