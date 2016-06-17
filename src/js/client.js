import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import secuenciaOriginal from "./pages/secuenciaOriginal";
import Inicio from "./pages/Inicio";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

require('bootstrap')
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Inicio}></IndexRoute>
      <Route path="secuenciaOriginal(/:article)" name="secuenciaOriginal" component={secuenciaOriginal}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
