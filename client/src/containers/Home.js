import React, { Component } from 'react';
import { Jumbotron } from '../components/Home/Jumbotron';
import ListArticle  from '../components/Home/ListArticle';
import axios from "axios";


class Home extends Component {
  
  state = {
    articles : "",
  }

  componentDidMount() {
      this.getArticles();
      this.articlesMapRender();
  }

  getArticles = () => {
      axios.get("api/article")
          .then(response => this.setState({articles : response.data}, () => console.log(response.data)))
          .catch(error => console.log(error))
  }

  articlesMapRender = () => {
    const {articles} = this.state;
    if(articles) {
        return articles.map((article, index) => {
            return <ListArticle key={index} article={article}/>
      })
    }   
  }

  render() {
    return (
        <div>
        <h1 className="text-center">Home Page</h1>
            <Jumbotron />
            {this.articlesMapRender()}
        </div>
    )
  }
}

export default Home;
