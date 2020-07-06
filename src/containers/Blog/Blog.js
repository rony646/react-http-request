import React, { Component } from 'react';
import { Route } from 'react-router-dom'


import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from '../../containers/Blog/NewPost/NewPost'

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/> {/* Render the "Posts" component in the root path*/}
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;