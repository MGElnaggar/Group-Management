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


## Site Flow

1. **Create a Group**
   - The user is presented with a form where they must enter the `group name` and `description`.
   - After submission, the group is created with a unique identifier and a timestamp for when it was created.

2. **View Groups**
   - After creating a group, the user can view a list of all groups.
   - Each group displays:
     - `Group Name`
     - `Group Description`
     - `Date and Time Created`
   - Below the group details, the user can see three buttons:
     - `Edit`: Allows the user to edit the group's name and description.
     - `Delete`: Allows the user to delete the group.
     - `Add Post`: Allows the user to add a new post to the group.

3. **Add a Post to a Group**
   - After clicking the `Add Post` button, the user is presented with a form to enter the `post title` and `description`.
   - Once the post is added, it is displayed within the group with:
     - `Post Title`
     - `Post Description`
     - `Date and Time Created`
   - Each post also has two buttons:
     - `Edit`: Allows the user to edit the post's title and description.
     - `Delete`: Allows the user to delete the post.

4. **Edit a Group or Post**
   - The user can update the details of a group or post through the `Edit` button.
   - After editing, the changes are saved and immediately reflected on the site.

5. **Delete a Group or Post**
   - Clicking the `Delete` button will remove the group or post from the site.



## Usage

1. Create groups using the form.
2. View the list of groups.
3. Edit or delete groups as needed.
4. Create and view posts within each group.


**View Site** : https://mgelnaggar.github.io/Group-Management/
