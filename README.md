# ToDo React App

This is a simple ToDo List application built with React. The app allows users to add, edit, and delete tasks. It also persists the data using `localStorage`, ensuring the tasks remain available even after a page refresh.

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Real-time task status updates (mark as completed)
- Save tasks in `localStorage`
- Notification system for success and error messages

## Installation

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/ToDo_react_app.git
   cd ToDo_react_app
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

## File Structure

Each app is stored under the src/ folder. Here’s a quick overview of the folder structure:

  ```bash
    ├── public
    ├── src
    │   ├── App.jsx           # Main component of the application
    │   ├── index.js          # Entry point of the React app
    │   ├── index.css         # Styles for the application
    ├── package.json          # Project dependencies
    ├── .gitignore            # Ignored files in git
    ├── README.md             # Project documentation
  ```

Each folder contains an App.jsx file, which is the main component file for that specific app.

## Built With

- React.js
- JavaScript (ES6+)
- CSS for basic styling

## Notifications

This project uses `react-notifications` to display success and error messages to the user. Below is a quick overview of how notifications are handled in the app
