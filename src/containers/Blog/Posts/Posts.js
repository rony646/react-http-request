import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import { Link } from 'react-router-dom'


class Posts extends Component  {

    state = {
        posts: [],
    }

    selectIdHandler = (id) => {
        this.setState({selectedPostId: id})
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
                return <Link to={'/' + item.id} key={item.id} >
                            <Post 
                            title={item.title} 
                            author={item.author}
                            date={item.date}
                            clicked={() => this.selectIdHandler(item.id)}/>
                        </Link>
            })
        }

        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts