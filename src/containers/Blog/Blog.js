import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'


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
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post"
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/" component={Posts}/> {/* Render the "Posts" component in the root path*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;