import React, { Fragment } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
// components
import { NavBar } from "./components/NavBar";
import { ListOfCardProject } from "./components/ListOfCardProject";
import { ListOfArticle } from "./components/ListOfArticle";
import { AboutMe } from "./components/AboutMe";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/portfolio" component={ListOfCardProject} />
          <Route exact path="/">
            <Redirect to="/portfolio" />
          </Route>
          <Route exact path="/articles" component={ListOfArticle} />
          <Route exact path="/about-me" component={AboutMe} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
