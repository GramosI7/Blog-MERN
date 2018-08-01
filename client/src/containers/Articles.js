import React, { Component } from 'react'
import ListTop from '../components/Articles/ListTop';
import Jumbotron from '../components/Home/Jumbotron';
import ListMiddle from '../components/Articles/ListMiddle';
import ListMiddleRIgth from "../components/Articles/ListMiddleRIgth";
import axios from "axios";


export class Articles extends Component {

  state = {
    articles : []
}

componentDidMount() {
    this.getArticles();
}

getArticles = () => {
    axios.get("api/article")
        .then(response => this.setState({articles : response.data}, () => console.log(response.data)))
        .catch(error => console.log(error))
}

articlesMapRender = () => {
  const {articles} = this.state;
      return articles.slice(0,3).map((article, index) => {
          return <ListMiddle key={index} article={article} />
      })
}

  render() {
    return (
        <div>
            <h1 className="text-center">List Articles</h1>
            <ListTop articles={this.state.articles}/>
            <Jumbotron />
            <div className="row">
              <div className="col-7">
                <ul>
                  {this.articlesMapRender()}
                </ul>
              </div>
              <ListMiddleRIgth article={this.state.articles}/>
            </div>
        </div>
    )
  }
}

export default Articles
