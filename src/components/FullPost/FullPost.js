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

                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                        .then(response => {
                        this.setState({loadedPost: response.data})
                    })
            }   
        }
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
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;