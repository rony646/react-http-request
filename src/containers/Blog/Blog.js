import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

   componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Rony Silva',
                        date: new Date().toLocaleDateString()
                    }
                })
                this.setState({posts: updatePosts});
            }).catch(error => {
                console.log(error)
                this.setState({error: true})
            })
    }

    selectIdHandler = (id) => {
        this.setState({selectedPostId: id})
    }


    render () {
        let posts= null
        if(!this.props.error) {
            posts = this.state.posts.map(item => {
                return <Post 
                    key={item.id} 
                    title={item.title} 
                    author={item.author}
                    date={item.date}
                    clicked={() => this.selectIdHandler(item.id)}/>
            })
        }

        console.log(posts, this.state.error)
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;