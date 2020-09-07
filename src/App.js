import React, { Fragment } from "react";
// components
import { NavBar } from "./components/NavBar";
import { ListOfCardProject } from "./components/ListOfCardProject";

export const App = () => {
  return (
    <Fragment>
      <NavBar />
      <ListOfCardProject />
    </Fragment>
  );
};
