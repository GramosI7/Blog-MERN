import React from 'react';


const TextInformation = (props) => {
    
      const {article} = props;
    return (
      <div >
        <h1 className="container__single-cour__title">{article.title}</h1>
        <h4 className="container__single-cour__written">Written by <a href="">{article.author}</a></h4>
        <p className="container__single-cour__body" dangerouslySetInnerHTML={{__html: article.body}}></p>
        <p>Ecrit le {article.date}</p>
      </div>
    )
  }

export default TextInformation
