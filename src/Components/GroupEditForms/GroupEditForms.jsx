import React, { useState } from 'react';

import classes from './GroupEditForms.module.css';

const GroupEditForm = ({ group, editGroup, setIsEditing }) => {
    const [name, setName] = useState(group.name);
    const [description, setDescription] = useState(group.description);

    const handleSubmit = (e) => {
    e.preventDefault();
    editGroup(group.id, { ...group, name, description });
    setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className={classes.groupEdit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
};

export default GroupEditForm;