import React, { useState } from 'react';

import classes from './PostsForm.module.css';

const PostForm = ({ addPost, groupId }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(groupId, { id: Date.now(), title, content, createdAt: new Date() });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className={classes.postForm}>
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Post Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
