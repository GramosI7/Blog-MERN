import React from 'react'
import {NavLink} from 'react-router-dom';


const ListMiddle = (props) => {
const {article} = props;
    return (
                    
                        <NavLink className="text-dark nav-link" to={`article/${article._id}`}>
                            <li className="row">
                                <img className="col-5" src="http://placehold.it/200X200" alt="" />
                                <div className="col-7">
                                    <h3 className="text__ellipsis">{article.title}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p> 
                                    <p className="text-muted">Presented by <NavLink to={`/user/${article.author}`}>{article.author}</NavLink></p>                       
                                </div>
                            </li>
                        </NavLink>
    )
}

export default ListMiddle;
