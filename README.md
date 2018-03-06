## Prompt
Provided below is the specification for a simple to-do list experience. A product manager has decided that we want to modify the experience to allow assigning tasks to other users. Please support this product initiative by:
 - Developing low-fidelity design(s) that reflects this feature. Include any notes about methodologies used to support your design decisions.
 - Updating the below specification to reflect your design.
 - Implementing a prototype based on your new specification.

------

# Nested Todo List Specification

## Technical Requirements
This web application is built using Angular 5, ngx-bootstrap, and fontawesome. It does not depend on a backend API and are persisted using "localStorage".

## Original Product Requirements

 - A top-level task may have nested child tasks. Each task should at a minimum have a `Title` as well as a `Completed` state.
 - You are only required to support one level of nesting.
 - It should be possible to collapse or expand a parent 'task'. In a collapsed state, any children 'tasks' should be hidden, and in an expanded state, any children 'tasks' should be shown.
 - Use semantic HTML elements, and try and keep your css organized.  Feel free to iterate on the design and add embellishments such as hover states, etc as you see fit
 - Test coverage, state persistence (localStorage, indexedDB, etc) are a bonus

## New Product Requirements

 - The application must support users with a login field in the header for existing users and a sign-up form for new users.
 - Tasks must be assigned to a user when they are created (from the list of users already signed up and stored in localstorage)
 - The currently assigned user is part of the task but partially completed tasks can be re-assigned to a different user.
 - Tasks, sub-tasks, the logged-in user, and the list of signed-up users must be persisted even when browser is closed (with no back-end authentication or persistence).  
 - Tasks and sub-tasks must be added with a single button and deleted with a single button. 
 - When tasks are deleted all of their subtasks must also be deleted.
 - When tasks are completed all of their sub-tasks must be set to completed, when toggled to uncomplete all sub-tasks become uncomplete.
 - Users must be able to filter the task list to view only the tasks they are assigned and only tasks that are incomplete (or both).
 - A user must be signed in to be able to "complete" a task that has been assigned to them.
 - Any user can edit any task's title, sub-task titles, or assignee as long as the task (or sub-task) being altered is not completed.
 - After editing any part of a task, the user may choose to discard the changes or persist them when leaving the edit mode.
 - Tasks can be set to "complete" and the back to "incomplete" by their assignee.
 - Clicking on the title, username, or sub-task of an incomplete task will take the task into "Edit mode".
 - In edit mode sub-tasks can be added, task or sub-task titles can be changed, the assignee can be changed, and the task itself or any of its sub-tasks can be deleted.
 - The appearance of subtasks under their parent task can be toggled to be "showing" or "hidden" using a caret beside the task title as a toggle button.
 - The name of the task assignee always appears beneath the task. Incomplete sub-tasks are assumed to be assigned to the current task owner.
 - Each sub-task can be completed individually by clicking on a checkbox next to it. When all sub-tasks are complete the task becomes automatically set to complete.
 - The header must not scroll off the screen when lists are very long.
 - A user may logout at any time and login as a new user.
 - New user accounts can be created when logged out and require a first name, last name and username (the latter is used for logging in and user identification).

#### Wire frames
<img src="https://github.com/judyarrizza/Errands/blob/master/design_documents/wireframe-signup.png">
<img src="https://github.com/judyarrizza/Errands/blob/master/design_documents/wireframe-tasks.png">

Systems dynamics diagrams are available in "design_documents" in several formats.
