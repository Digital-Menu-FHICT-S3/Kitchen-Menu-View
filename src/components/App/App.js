import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import OrdersCurrent from "../Orders/OrdersCurrent";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CreateFood from "../CreateFood/CreateFood";
import ManageCategories from "../ManageCategories/ManageCategories";
import ManageIngredients from "../ManageIngredients/ManageIngredients"
import OrdersDone from "../Orders/OrdersDone";
import Stock from "../Stock/Stock";

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
          <Route exact path="/add-dish">
            <Layout title="Add Dish">
              <CreateFood />
            </Layout>
          </Route>
          <Route exact path="/stock">
            <Layout title="Stock">
              <Stock />
            </Layout>
          </Route>
          <Route exact path="/managecategories">
            <Layout title="Manage Categories">
              <ManageCategories />
            </Layout>
          </Route>
          <Route exact path="/manageingredients">
            <Layout title="Manage Ingredients">
              <ManageIngredients />
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
