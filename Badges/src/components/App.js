import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/New" component={BadgeNew} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
