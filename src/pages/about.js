import * as React from "react";
import { useState } from "react";
import Category from "../components/category";

const AboutPage = () => {
  const [showMe, setShowMe] = useState(false);
  return (
    <main>
      <title>About Me</title>
      <Category />
      <h1>About</h1>
      <div>
        <button onClick={() => setShowMe(!showMe)}>Show Me</button>
        {showMe && <p>Hi there! I'm the proud creator of this site</p>}
      </div>
    </main>
  );
};

export default AboutPage;
