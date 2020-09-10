import React from "react";
//components
import { Article } from "../Article";
// content
import { articles } from "../../content";
// styles
import { ListOfArticleContainer } from "./styles";

export const ListOfArticle = () => {
  return (
    <ListOfArticleContainer>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </ListOfArticleContainer>
  );
};
