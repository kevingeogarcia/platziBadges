import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import badgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect from="/" to="home" exact />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/New" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={badgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
