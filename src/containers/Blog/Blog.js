import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
    state = {
        data: [],
        clicked: false,
        currData: {
            id: null,
            title: null,
            body: null
        },
        isServerError: false
    };
    postList = null;
    clickHandler = (data) => {
        console.log(data);
        this.setState({ currData: data });
        //this.setState({clicked: true});
    }

    generateList() {
        return this.state.data.map((currData) => {
            return <Post currData={currData} key={currData.id} click={this.clickHandler} />
        });
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.setState({ data: response.data.splice(0, 5) });
        }).catch((err) => {
            this.setState({ isServerError: true })
        });
    }

    render() {
        return (
            <div>
                {this.state.isServerError ? <h1 style={{color:'red', textAlign:'center'}}>Unable to handle the request. Server down!</h1> : null }
                    <section className="Posts">
                        {this.generateList()}
                    </section>
                    <section>
                        <FullPost clickedData={this.state.currData} />
                    </section>
                    <section>
                        <NewPost />
                    </section> 
            </div>
        );
    }
}

export default Blog;