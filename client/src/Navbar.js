import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import {logoutUser} from "./actions/authActions";

class Navbar extends Component {

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    }

  render() {
    const {isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <ul className="navbar-nav mr-rigth mt-2 mt-lg-0">
            <li className="nav-item active">
                <NavLink className="nav-link" onClick={this.onLogoutClick} to="/">                
                    <img src={user.avatar} className="rounded-circle" style={{width: "25px", marginRight: "5px"}} alt={user.firstName}/>
                        Logout
                </NavLink>
                < span className="sr-only">(current)</span>
            </li>
        </ul>   
    )

    const guestLinks = (
        <ul className="navbar-nav mr-rigth mt-2 mt-lg-0">
        <li className="nav-item active">
            <NavLink to="/login" className="nav-link">Login</NavLink><span className="sr-only">(current)</span>
        </li>
        <li className="nav-item active">
            <NavLink className="nav-link" to="/register">Register</NavLink><span className="sr-only">(current)</span>
        </li>
    </ul>   
    )

    const guestAddArticle = (
        <li className="nav-item active">
            <NavLink className="nav-link" to="/add">Ajouter un article</NavLink><span className="sr-only">(current)</span>
        </li>  
    )

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav_css">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse container" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link">Home</NavLink><span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/articles">Articles</NavLink><span className="sr-only">(current)</span>
                        </li>
                        {isAuthenticated ? guestAddArticle : null}    
                    </ul>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Navbar);
