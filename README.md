
## Description

This a simple to-do list web-app experience.
 
It is built using Angular 5, ngx-bootstrap, and Fontawesome as a "front-end only" demonstration. It therefore does not depend on an API middle-tier or a backend database. Users and input data are persisted using "localStorage".

## Product Requirements

 - A top-level task may have nested child tasks. Each task should at a minimum have a `Title` as well as a `Completed` state.
 - You are only required to support one level of nesting.
 - It should be possible to collapse or expand a parent 'task'. In a collapsed state, any children 'tasks' should be hidden, and in an expanded state, any children 'tasks' should be shown.
 - Use semantic HTML elements, and try and keep your css organized.  Feel free to iterate on the design and add embellishments such as hover states, etc as you see fit
 - The application must support users with a login field in the header for existing users and a sign-up form for new users.
 - Tasks must be assigned to a user when they are created (from the list of users already signed up and stored in localstorage)
 - The name of the task assignee must appear beneath the task. Incomplete sub-tasks are assumed to be assigned to the current task owner.
 - The currently assigned user is part of the task but partially completed tasks (some subtasks complete) can be re-assigned to a different user.
 - Tasks, sub-tasks, the logged-in user, and the list of signed-up users must be persisted even when browser is closed (with no back-end authentication or persistence).  
 - It must be possible to add and delete tasks and subtasks with a minimal number of actions. 
 - When a task is deleted all of its sub-tasks must also be deleted.
 - When a task is completed all of its sub-tasks must be set to completed, when a task is toggled back to "incomplete" all sub-tasks must become incomplete.
 - Users must be able to filter the task list to view only the tasks they are assigned and only tasks that are incomplete (or both).
 - The appearance of sub-tasks under their parent task can be toggled to be "showing" or "hidden" using a caret beside the task title as a toggle button.
 - A user must be logged in to be able to "complete" a task assigned to them (or any of its sub-tasks).
 - Each sub-task can be completed individually by clicking on a checkbox next to it. When all sub-tasks are complete the task becomes automatically set to complete.
 - The header must not scroll off the screen when lists are very long. 
 - Tasks (and their sub-tasks) can be set to "complete" (and back to "incomplete" if desired) only if the task is assigned to the current user.
 - Clicking on the title, username, or sub-task of an incomplete task will take the task into "Edit mode".
 - In edit mode sub-tasks can be added, task or sub-task titles can be changed, the assignee can be changed, and the task itself or any of its sub-tasks can be toggled incomplete or complete and deleted.
 - Any user can edit any task's title, sub-tasks, or assignee as long as the task (or sub-task) being altered is incomplete.
 - After editing any part of a task, the user may choose to discard the changes or persist them when leaving the edit mode.
 - A user may logout at any time and login as a new user.
 - New user accounts can be created when logged out and require a first name, last name and username (the latter is used for logging in and user identification).

#### Wire frames
<img src="https://github.com/judyarrizza/Errands/blob/master/design_documents/wireframe-signup.png">
<img src="https://github.com/judyarrizza/Errands/blob/master/design_documents/wireframe-tasks.png">

Systems dynamics diagrams are available in "design_documents" in several formats.
