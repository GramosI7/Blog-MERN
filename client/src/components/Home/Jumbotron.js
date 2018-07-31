import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Article World !</h1>
            <p className="lead">We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
            <hr className="my-4"/>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <NavLink className="btn btn-success btn-lg" to="/register" >Get started</NavLink>
            &nbsp;
            <NavLink className="btn btn-info btn-lg" to="/articles" >See articles</NavLink>
        </div>
      </div>
    )
  }
}

export default Jumbotron
