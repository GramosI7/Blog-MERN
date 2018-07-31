import React, { Component } from 'react'
import EditInfo from '../components/EditArticle.js/EditInfo';
import axios from "axios";

export class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "",
            title: '',
            author: "",
            body: ''
            };
        }

        componentDidMount() {
            this.getData();
        }
    
        postData = (e) => {
        const {id} = this.props.match.params;
        e.preventDefault();
        const newCours = {
            title : this.state.title,
            body: this.state.body}
        axios.put(`/api/article/${id}`, newCours)
            .then(response => this.props.history.push(`/article/${id}`))
            .catch(err => console.log(err));
        }  

        getData = () => {
            const {id} = this.props.match.params;
            axios.get(`/api/article/${id}`)
                .then(response => {
                    this.setState({
                        title: response.data.title,
                        body: response.data.body
                    })
                })
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
            const {id} = this.props.match.params;
            return (
            <div>
                <EditInfo value={this.state} onHandleChangeTitle={this.onHandleChangeTitle} postData={this.postData} onHandleChange={this.onHandleChange} id={id} />
            </div>
            )
        }
    }

export default EditArticle
