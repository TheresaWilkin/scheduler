# Scheduler

Link: https://appetize.io/app/jbc4jp6mmgt17eqhkgu1uryxrw?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3

## Description

A task scheduler with the ability to break large tasks into smaller subtasks with individual due dates.

## Screenshots

### Homepage/Login

![login](/src/images/login.png)

### Task List

![task list](/src/images/taskList.png)

### Task Create

![task create](/src/images/taskAdd.png)

### Task Edit

![task edit](/src/images/taskEdit.png)

## Tech Stack

- Server: Firebase

- Client: React-Native, React, Redux, Thunk, React-Native-Router-Flux

- Security: Firebase

# Database Structure

## Collections
#### `users`
	{
		-g3gr8gyf3wegr: {
      tasks: {
        -3487ty8347t: {
          task: "Write Essay",
          description: "5 paragraphs, MLA format",
          dueDate: "Wed Apr 26 2017 20:24:43 GMT-0400 (EDT)",
          dateCreated: "Fri Jan 27 2017 08:37:00 GMT-0500 (EST)",
          subtasks: "5"
        }
      }
    }
	}
