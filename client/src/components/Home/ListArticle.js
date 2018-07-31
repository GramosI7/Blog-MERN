import React from 'react';
import {NavLink} from 'react-router-dom';

const ListArticle = (props) => {   
    return (
            <div>
                <NavLink className="text-dark nav-link" to={`article/${props.article._id}`}>
                <div className="row hover">
                    <div className="col-sm-4">
                            <img src="http://placehold.it/300X300" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <h3 className="title">{props.article.title}</h3>
                        <p className="text-muted"><span className="glyphicon glyphicon-calendar"></span>{props.article.date}</p>
                        <p>60% of organizations were exposed to actual or attempted fraud loss last year. As fraud and risk increases year over year, the amount of data being collected increases as well.
                        </p>
                        <p className="text-muted">Presented by <NavLink to={`/user/${props.article.author}`}>{props.article.author}</NavLink></p>
                    </div>
                </div> 
                </NavLink> 
                <hr/>    
            </div>       
    )
}

export default ListArticle
