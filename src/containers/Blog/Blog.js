import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'


import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from '../../containers/Blog/NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post"
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/> {/* Render the "Posts" component in the root path*/}
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;