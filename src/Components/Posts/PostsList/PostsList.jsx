import React from 'react';
import PostItem from '../PostsItem/PostItem';

import classes from './PostsList.module.css';

const PostList = ({ posts, editPost, deletePost, groupId }) => {
    return (
        <div className={classes.post}>
            {posts.map((post) => (
                <PostItem
                key={post.id}
                post={post}
                editPost={editPost}
                deletePost={deletePost}
                groupId={groupId}
                />
            ))}
        </div>
    );
};

export default PostList;
