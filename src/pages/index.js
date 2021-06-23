import * as React from "react";
import Category from "../components/category";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <div className="page">
      <Category />
      <h1>Steve Yu's Gatsby WebSite</h1>
      <StaticImage
        src="http://localhost:3000/static/media/profile.b272f5f5.png"
        alt="steve yu's animation profile"
        width="200"
        height="200"
      />
    </div>
  );
};

export default IndexPage;
