import React, { Component } from 'react';
import axios from "axios";
import AddInfo from '../components/AddArticle/AddInfo';

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      check: "false"
    };
  }

  postData = (e) => {
    e.preventDefault();
    const newCours = {
        title : this.state.title,
        body: this.state.body,
        published: this.state.check
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

  checkbox = (e) => {
    if(e.target.value === "false") {
      this.setState({check: "true" }, () => console.log(this.state.check))
    }
  }

  render() {
    return (
      <div>
      <AddInfo check={this.state.check} checkbox={this.checkbox} postData={this.postData} onHandleChangeTitle={this.onHandleChangeTitle} onHandleChange={this.onHandleChange} />
      </div>  
    );
  }
}

export default AddArticle;