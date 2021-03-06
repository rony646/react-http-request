import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Post from '../../../components/Post/Post'
import FullPost from '../../Blog/FullPost/FullPost'



class Posts extends Component  {

    state = {
        posts: [],
    }

    selectIdHandler = (id) => {
        this.props.history.push(`/${id}`)
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



    render() {

        let posts= null
        if(!this.props.error) {
            posts = this.state.posts.map(item => {
                return <Post 
                            key={item.id}
                            title={item.title} 
                            author={item.author}
                            date={item.date}
                            clicked={() => this.selectIdHandler(item.id)}
                            >
                        </Post>
            })
        }

        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        )
    }
}

export default Posts