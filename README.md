I created a project called Bug/Task Tracker Interface. In this project, I developed a login page and a data.js file where I defined the username, email, and role of users who can log in. On the dashboard page, there are "Create Bug" and "Logout" buttons.


While creating a bug, we can assign it to users, set its status and priority, and also edit, delete, or close the bug. When a bug is closed, its status changes to "Pending Approval", it turns grey, and all its buttons are disabled.

When a Manager logs in, they can view all tasks and have the ability to approve or reopen closed tasks. The application also tracks the time duration of each task from the moment it's created.

Additionally, I implemented filters based on priority, status, and assignee.

To run the project locally:
1.Clone the repository using
git clone https://github.com/Rakshithrpoojary/BugorTask.git

2.Navigate into the project folder and run:
npm install

3.Important: In the vite.config.js file, change the following line:
base: process.env.VITE_BASE_PATH || "/BugorTask",
to
base: process.env.VITE_BASE_PATH || "/",
