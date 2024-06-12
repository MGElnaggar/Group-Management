import React, { useState } from 'react';
import GroupForm from './Components/GroupForm/GroupForm';
import GroupList from './Components/GroupLists/GroupLists';
import classes from './App.module.css';

const App = () => {
  const [groups, setGroups] = useState([]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const editGroup = (id, updatedGroup) => {
    setGroups(groups.map((group) => (group.id === id ? updatedGroup : group)));
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  const addPost = (groupId, post) => {
    setGroups(groups.map(group => 
      group.id === groupId ? { ...group, posts: [...group.posts, post] } : group
    ));
  };

  const editPost = (groupId, postId, updatedPost) => {
    setGroups(groups.map(group => 
      group.id === groupId ? { 
        ...group, 
        posts: group.posts.map(post => post.id === postId ? updatedPost : post) 
      } : group
    ));
  };

  const deletePost = (groupId, postId) => {
    setGroups(groups.map(group => 
      group.id === groupId ? { 
        ...group, 
        posts: group.posts.filter(post => post.id !== postId) 
      } : group
    ));
  };

  return (
    <div className={classes.app}>
      <div className={classes.appForm}>
        <h1>Groups</h1>
        <GroupForm addGroup={addGroup} />
        <GroupList
          groups={groups}
          editGroup={editGroup}
          deleteGroup={deleteGroup}
          addPost={addPost}
          editPost={editPost}
          deletePost={deletePost}
        />
      </div>
    </div>
  );
};

export default App;
