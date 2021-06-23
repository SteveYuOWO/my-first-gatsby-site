import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Category from "../components/category";

const MetaInfo = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        port
        host
        siteMetadata {
          title
          description
          age
          username
        }
      }
    }
  `);
  const siteMetadata = data.site.siteMetadata;
  return (
    <main>
      <h1>MetaInfo:</h1>
      <div>
        <strong>IP and Port: </strong>
        {data.site.host}:{data.site.port}
      </div>
      <div>
        <strong>title</strong>
        {siteMetadata.title}
        <br />
      </div>
      <div>
        <strong>description</strong>
        {siteMetadata.description}
        <br />
      </div>
      <div>
        <strong>username</strong>
        {siteMetadata.username}
        <br />
      </div>
      <div>
        <strong>age</strong>
        {siteMetadata.age}
        <br />
      </div>
      <Category />
    </main>
  );
};

export default MetaInfo;
