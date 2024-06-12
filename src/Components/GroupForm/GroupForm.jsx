import React, { useState } from 'react';

import classes from './GroupForm.module.css';

const GroupForm = ({ addGroup }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addGroup({ id: Date.now(), name, description, createdAt: new Date() });
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={classes.groupForm}>
            <input
                type="text"
                placeholder="Group Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Group Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Create Group</button>
        </form>
    );
};

export default GroupForm;