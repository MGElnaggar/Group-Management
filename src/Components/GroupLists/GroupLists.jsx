import React from 'react';
import GroupItem from '../GroupItems/GroupItems';

import classes from './GroupLists.module.css';

const GroupList = ({ groups, editGroup, deleteGroup, addPost, editPost, deletePost}) => {
    return (
        <div className={classes.list}>
            {groups.map((group) => (
                <GroupItem
                key={group.id}
                group={group}
                editGroup={editGroup}
                deleteGroup={deleteGroup}
                addPost={addPost} 
                editPost={editPost}
                deletePost={deletePost}
                />
            ))}
        </div>
    );
};

export default GroupList;