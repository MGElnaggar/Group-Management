# Group Management Application

This is a React.js application that allows users to create, view, update, and delete groups. Additionally, users can create and view posts within each group.

## Features

1. **Group Creation Form**
    - A form where users can enter a group name and description.
    - A button to submit the form and create a group.

2. **Group List**
    - Display a list of all created groups.
    - Each group shows its name, description, and creation date.
    - Each group has "Edit" and "Delete" buttons.

3. **Group Editing**
    - When the "Edit" button is clicked, the group information becomes editable.
    - The form updates the group's information.

4. **Group Deletion**
    - The "Delete" button removes the group from the list.


- **Functionality**: Users to create and view posts within each group. Each group has a list of posts with a title and content.


## Group Model Schema

Each group has the following fields:
- `id`: A unique identifier for the group (generated using `Date.now()` or a UUID).
- `name`: The name of the group (string).
- `description`: A brief description of the group (string).
- `createdAt`: The date and time when the group was created (Date object or string).


## Usage

1. Create groups using the form.
2. View the list of groups.
3. Edit or delete groups as needed.
4. Create and view posts within each group.


