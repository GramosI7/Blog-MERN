import React, { Component } from 'react'
import TextInformation from '../components/SingleArticle/TextInformation';
import EditBtn from '../components/SingleArticle/EditBtn';
import DeleteBtn from '../components/SingleArticle/DeleteBtn';
import axios from "axios";

export class SingleArticle extends Component {

    state = {
        article : ""
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        const {id} = this.props.match.params;
        axios.get(`/api/article/${id}`)
            .then(response => this.setState({article : response.data}, () => console.log(response.data)))
            .catch(error => console.log(error))
    }

    deleteArticle = () => {
        const {id} = this.props.match.params;
        axios.delete(`/api/article/${id}`)
                .then(response => this.props.history.push('/'))
                .catch(err => console.log(err));
    }

    render() {
        const {id} = this.props.match.params;
        return (
            <div className="container__single-cour">
                <TextInformation article={this.state.article} />
                <EditBtn id={id} />
                &nbsp;
                <DeleteBtn deleteArticle={this.deleteArticle}/>
            </div>
        )
    }
}

export default SingleArticle
