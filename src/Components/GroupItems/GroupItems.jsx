import React, { useState } from 'react';
import GroupEditForm from '../GroupEditForms/GroupEditForms';
import PostForm from '../Posts/PostsForm/PostForm';
import PostList from '../Posts/PostsList/PostsList';


import classes from './GroupItems.module.css';

const GroupItem = ({ group, editGroup, deleteGroup, addPost, editPost, deletePost }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showPostForm, setShowPostForm] = useState(false);

    if (!group.posts) {
        group.posts = [];
    }

    return (
        <div>
            {isEditing ? (
                <GroupEditForm
                group={group}
                editGroup={editGroup}
                setIsEditing={setIsEditing}
                />
            ) : (
                <div className={classes.items}>
                    <h2>{group.name}</h2>
                    <p>{group.description}</p>
                    <p>Created At: {new Date(group.createdAt).toLocaleString()}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteGroup(group.id)}>Delete</button>
                        
                    {/* Button to toggle PostForm visibility */}
                    <button className={classes.postBtn} onClick={() => setShowPostForm(!showPostForm)}>
                        {showPostForm ? 'Cancel Post' : 'Add Post'}
                    </button>
                        
                    {group.posts !== undefined ? (
                        <>
                            {showPostForm && (
                                <PostForm addPost={addPost} groupId={group.id} />
                            )}
                            <PostList
                                posts={group.posts}
                                editPost={editPost}
                                deletePost={deletePost}
                                groupId={group.id}
                            />
                        </>
                        ) : (
                        <p>Loading posts...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default GroupItem;