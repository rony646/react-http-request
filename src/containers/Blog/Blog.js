import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

   componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
            })
    }

    selectIdHandler = (id) => {
        this.setState({selectedPostId: id})
    }


    render () {
        const posts = this.state.posts.map(item => {
            return <Post 
                key={item.id} 
                title={item.title} 
                author={item.author}
                date={item.date}
                clicked={() => this.selectIdHandler(item.id)}/>
        })
        
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