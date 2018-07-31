import React from 'react';
import {NavLink} from "react-router-dom";

const ListMiddleRIgth = (props) => {
    
    const {article} = props;

    const articlesMapRender = () => {
        if(article) {
            return article.slice(0,4).map((article, index) => {
                return (
                           <NavLink key={index} to={`article/${article._id}`}className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 text__ellipsis">{article.title}</h5>
                            <small>3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <p className="text-muted mb-0">Presented by <NavLink to={`/user/${article.author}`}>{article.author}</NavLink></p> 
                        </NavLink>
                )
            })
        }   
   }

    return (
        <div className="col-5">
                    <h4 className="text-center">Popular On Word</h4>
                    <div className="list-group">
                        {articlesMapRender()}
                    </div>
                </div>
    )
}

export default ListMiddleRIgth
