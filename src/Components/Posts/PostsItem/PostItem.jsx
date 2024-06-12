import React, { useState } from 'react';
import PostEditForm from '../PostEditForm/PostEditForm';

import classes from './PostItem.module.css';

const PostItem = ({ post, editPost, deletePost, groupId }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={classes.items}>
            {isEditing ? (
                <PostEditForm
                    post={post}
                    editPost={editPost}
                    setIsEditing={setIsEditing}
                    groupId={groupId}
                />
            ) : (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deletePost(groupId, post.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default PostItem;
