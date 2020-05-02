import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={(e) => props.click(props.currData)}>
        <h1>{props.currData.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;