import React, { Component } from 'react';
import axios from "axios";
import AddInfo from '../components/AddArticle/AddInfo';

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      // author: "",
      body: ''
    };
  }

  postData = (e) => {
    e.preventDefault();
    const newCours = {
        title : this.state.title,
        // author: this.state.author,
        body: this.state.body,
      }
      
    axios.post("/api/article", newCours )
        .then(response => this.props.history.push("/"))
        .catch(err => console.log(err));
  }
  
  onHandleChangeTitle = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  onHandleChange = (e) => {
    this.setState({ body: e });
    console.log(this.state.body);
  }

  render() {
    return (
      <AddInfo postData={this.postData} onHandleChangeTitle={this.onHandleChangeTitle} onHandleChange={this.onHandleChange} />
    );
  }
}

export default AddArticle;