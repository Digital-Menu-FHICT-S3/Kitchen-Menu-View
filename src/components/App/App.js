import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import OrdersCurrent from "../Orders/OrdersCurrent";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import OrdersDone from "../Orders/OrdersDone";
import Stock from "../Stock/Stock";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout title="Current">
              <OrdersCurrent />
            </Layout>
          </Route>
          <Route exact path="/OrdersCurrent">
            <Layout title="Current">
              <OrdersCurrent />
            </Layout>
          </Route>
          <Route exact path="/OrdersDone">
            <Layout title="Done">
              <OrdersDone />
            </Layout>
          </Route>
          <Route exact path="/Stock">
            <Layout title="stock">
              <Stock />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
