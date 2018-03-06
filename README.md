## Prompt
Provided below is the specification for a simple to-do list experience. A product manager has decided that we want to modify the experience to allow assigning tasks to other users. Please support this product initiative by:
 - Developing low-fidelity design(s) that reflects this feature. Include any notes about methodologies used to support your design decisions.
 - Updating the below specification to reflect your design.
 - Implementing a prototype based on your new specification.

------

# Nested Todo List Specification

## Technical Requirements
This web application is built using a modern Angular 5 and does not depend on a backend API. All data are persisted locally using "localStorage".
## Product Requirements

 - A top-level task may have nested child tasks. Each task should at a minimum have a `Title` as well as a `Completed` state.
 - You are only required to support one level of nesting.
 - It should be possible to collapse or expand a parent 'task'. In a collapsed state, any children 'tasks' should be hidden, and in an expanded state, any children 'tasks' should be shown.
 - Use semantic HTML elements, and try and keep your css organized.  Feel free to iterate on the design and add embellishments such as hover states, etc as you see fit
 - Test coverage, state persistence (localStorage, indexedDB, etc) are a bonus

## New Product Requirements

 - The application must support users with a login field in the header for existing users and a sign-up form for new users.
 - Tasks must be assigned to a user when they are created (from the list of users already signed up and stored in localstorage)
 - Tasks, subtasks, the current user, and the list of signed-up users must be persisted even when browser is closed (with no back-end authentication or persistence).  
 - Tasks must be added with a single button and deleted with a single button. 
 - When tasks are deleted all of their subtasks are also deleted.
 - Users must able to filter the task list for the tasks they are assigned and tasks that are incomplete (or both).
 - A user must be signed in to be able to "complete" a task that has been assigned to them.
 - Any user can edit any task's title, subtask titles, or assignee as long as the task (or subtask) being altered is not completed.
 - After editing any part of a task, the user may discard the changes or persist them before leaving the edit mode.
 - Tasks can be set to "complete" and the back to "incomplete" by the assignee.
 - Clicking on the title, username, or subtask of an incomplete task will take the task into "Edit mode".
 - In edit mode sub-tasks can be added, text can be changed, the assignee can be changed, the task or any of its sub-tasks can be deleted.
 - The appearance of subtasks under a task can be toggled to be "showing" or "hidden" using a caret beside the task title as a toggle button.
 - The name of the task assignee always appears beneath the task. Incomplete subtasks are assigned to the current task owner.
 - Each sub-task can be completed individually by clicking on a checkbox next to it. When all subtasks are complete the task becomes automatically completed.
 - The header must not scroll off the screen
 - A user may signout at any time and sign in as a new user.
 - User accounts require a first name, last name and username (the latter is used for logging in and user identification).

#### Wire frames
<img src="https://github.com/judyarrizza/Errands/blob/master/design_documents/wireframe-signup.png">
<img src="https://github.com/judyarrizza/Errands/blob/master/design_documents/wireframe-tasks.png">

Systems dynamics diagrams are available in "design_documents" in sev eral formats.
