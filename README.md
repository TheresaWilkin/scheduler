# Scheduler

Link: [add link]

## Description

A task scheduler with the ability to break large tasks into smaller subtasks with individual due dates.

## Screenshots

### Homepage/Login

![full page](/client/assets/image1.png)

### Task List

![main page](/client/assets/image2.png)

### Task Create

![main page](/client/assets/image2.png)

### Task Edit

![main page](/client/assets/image2.png)

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
