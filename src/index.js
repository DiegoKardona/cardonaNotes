import React from "react";
import { render } from "react-dom";

import "./styles.scss";

//Importing redux
import { Provider } from "react-redux";
import store from "./store";

import "./libs/theme.scss";

/*Importing primereact style*/
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.scss";

import { Switch, BrowserRouter, Route } from "react-router-dom";

/*Importing pages*/
//Home
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/home/login/LoginPage";
import RegisterPage from "./pages/home/register/RegisterPage";

//Acount
import AccountPage from "./pages/account/AccountPage";

//Notes
import NotesPage from "./pages/notes/NotesPage";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/notes" component={NotesPage} />
      </Switch>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
