import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if(this.props.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {

                axios.get(`/posts/${this.props.id}`)
                        .then(response => {
                        this.setState({loadedPost: response.data})
                    })
            }   
        }
    }

    deleteHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(res => {
                console.log(res) // It wasn't really deleted
            })
    }

    render () {
        let post = <p style={{textAlign: "center"}}><strong>Please select a Post!</strong></p>;

        if(this.props.id) {
            post = <p style={{textAlign: "center"}}><strong>Loading...</strong></p>;
        }

        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteHandler}className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;