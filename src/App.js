import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import MyOrders from "./Components/MyOrders/MyOrders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddServices from "./Components/AddServices/AddServices";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App back-ground ">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/myorders">
              <MyOrders />
            </PrivateRoute>

            <Route exact path="/addservices">
              <AddServices />
            </Route>
            <Route exact path="/details/:_id">
              <ServiceDetails />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
