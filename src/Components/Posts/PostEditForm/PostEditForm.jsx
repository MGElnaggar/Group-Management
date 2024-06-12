import React, { useState } from 'react';

import classes from './PostEditForm.module.css';

const PostEditForm = ({ post, editPost, setIsEditing, groupId }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        editPost(groupId, post.id, { ...post, title, content });
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className={classes.postEdit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
};

export default PostEditForm;
