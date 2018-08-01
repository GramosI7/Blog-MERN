import React, { Component } from 'react'
import TextInformation from '../components/SingleArticle/TextInformation';
import EditBtn from '../components/SingleArticle/EditBtn';
import DeleteBtn from '../components/SingleArticle/DeleteBtn';
import axios from "axios";
import {connect} from "react-redux";


export class SingleArticle extends Component {

    state = {
        article : "",
        userName: {}
    }

    componentDidMount() {
        this.getArticles();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth) {
            this.setState({userName: nextProps.auth.user.firstName})
        }
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
        const hisArticles = (
            <div>
                <EditBtn id={id} />
                &nbsp;
                <DeleteBtn deleteArticle={this.deleteArticle}/>
            </div>
            
        )
        return (
            <div className="container__single-cour">
                <TextInformation article={this.state.article} />
                {this.props.auth.user.pseudo === this.state.article.author ? hisArticles : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(SingleArticle);
