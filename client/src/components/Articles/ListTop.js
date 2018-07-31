import React from 'react';
import {NavLink} from 'react-router-dom';


const ListTop = (props) => {
const {articles} = props;
    const articlesTopLeft = () => {
        if(articles) {
            return articles.slice(0,2).map((articles, index) => {
                return (
                            <NavLink key={index} className="text-dark nav-link" to={`article/${articles._id}`}>
                            <li  className="row">
                                <img className="col-5" src="http://placehold.it/200X200" alt="" />
                                    <div className="col-7">
                                        <h3 className="text__ellipsis">{articles.title}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p> 
                                        <p className="text-muted">Presented by <NavLink to={`/user/${articles.author}`}>{articles.author}</NavLink></p>                       
                                    </div>
                            </li>
                            <br/>
                            </NavLink>
                )
            })
        }   
   }

   const articlesTopRight = () => {
    if(articles) {
        return articles.slice(2,4).map((articles, index) => {
            return (
                        <NavLink key={index} className="text-dark nav-link" to={`article/${articles._id}`}>
                        <li  className="row">
                            <img className="col-5" src="http://placehold.it/200X200" alt="" />
                            <div className="col-7">
                                <h3 className="text__ellipsis">{articles.title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p> 
                                <p className="text-muted">Presented by <NavLink to={`/user/${articles.author}`}>{articles.author}</NavLink></p>                       
                            </div>
                        </li>
                        <br/>
                        </NavLink>

            )
        })
    }   
}


        return (
            <div>
                <div className="row">
                    
                    <div className="col-6">
                        <ul>
                            {articlesTopLeft()}
                        </ul>
                    </div>
        
                    <div className="col-6">
                        <ul>
                            {articlesTopRight()}
                        </ul>
                    </div>
                    
                </div>
            </div>
          )
}

export default ListTop
