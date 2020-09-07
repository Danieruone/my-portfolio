import React from "react";
//styles
import { CardContainer, CardImage, CardText, Button } from "./styles";
import defaultImage from "../../images/default.jpg";

export const CardProject = () => {
  return (
    <CardContainer>
      <CardImage>
        <img src={defaultImage}></img>
      </CardImage>
      <CardText>
        <h1>Jumper Fox</h1>
        <p>
          Videojuego para dispositivos móviles desplegado en la tienda de
          Google.
        </p>
        <Button>Ir al proyecto</Button>
      </CardText>
    </CardContainer>
  );
};
