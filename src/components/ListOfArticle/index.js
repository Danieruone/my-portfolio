import React from "react";
//components
import { Article } from "../Article";
// content
import { articles } from "../../content";
// styles
import { ListOfArticleContainer } from "./styles";
import workinggif from "../../images/working.gif";

export const ListOfArticle = () => {
  return (
    <ListOfArticleContainer>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
      <img
        src={workinggif}
        style={{ width: 300, marginTop: 1 }}
        alt="Persona trabajando gif"
      />
    </ListOfArticleContainer>
  );
};
