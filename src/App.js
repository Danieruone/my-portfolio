import React, { Fragment } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
// components
import { NavBar } from "./components/NavBar";
import { ListOfCardProject } from "./components/ListOfCardProject";
import { ListOfArticle } from "./components/ListOfArticle";

export const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/portafolio" component={ListOfCardProject} />
          <Route exact path="/">
            <Redirect to="/portafolio" />
          </Route>
          <Route exact path="/articulos" component={ListOfArticle} />
          <Route exact path="/sobremi" component={ListOfCardProject} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
