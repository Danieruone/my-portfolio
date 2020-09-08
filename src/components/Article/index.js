import React from "react";
// styles
import { Anchor } from "./styles";
import { FaMedium } from "react-icons/fa";

export const Article = ({ name, description, url }) => {
  return (
    <Anchor href={url} target="_blank">
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        <FaMedium />
      </div>
      <hr />
    </Anchor>
  );
};
