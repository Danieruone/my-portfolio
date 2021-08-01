import React from "react";
// styles
import { Anchor } from "./styles";
import articlesvg from "../../images/icons/article.svg";

export const Article = ({ name, description, url }) => {
  return (
    <Anchor href={url} target="_blank">
      <img src={articlesvg} alt="Icono artículo" />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </Anchor>
  );
};
