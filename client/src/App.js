import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//pages
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import About from "./pages/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Employee" exact component={Employee} />
          <Route path="/About" exact component={About} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
