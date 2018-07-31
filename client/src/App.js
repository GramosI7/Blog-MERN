import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './style/App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux"; 
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import PrivateRoute from "./commons/PrivateRoute";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./containers/Home";
import AddArticle from './containers/AddArticle';
import Register from './containers/Register';
import Articles from './containers/Articles';
import Login from './containers/Login';
import SingleArticle from './containers/SingleArticle';
import EditArticle from './containers/EditArticle';


if(localStorage.jwtToken) {
  console.log(localStorage.jwtToken);
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  //expired token
  const currentTime = Date.now() /1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login"
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div>
          <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/article/:id" component={SingleArticle} />
              <Switch>
                <PrivateRoute exact path="/article/edit/:id" component={EditArticle} />
                <PrivateRoute exact path="/add" component={AddArticle} />
              </Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
