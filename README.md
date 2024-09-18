
# ToDo_react_app
This is a simple ToDo List application built using React. The app allows users to add tasks, edit them, mark them as completed, and delete them. It also uses localStorage to persist tasks between sessions, so your to-dos are saved even when you refresh or close the page.
# React ToDo Application

This is a simple **ToDo List** application built using **React**. The app allows users to add tasks, edit them, mark them as completed, and delete them. It also uses **localStorage** to persist tasks between sessions, so your to-dos are saved even when you refresh or close the page.

## Features

- Add a new task with a timestamp.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Notifications on task addition, deletion, and errors.
- Local storage integration to persist tasks between sessions.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Notifications**: For showing success and error notifications.
- **localStorage**: To save the to-do list in the browser.
- **CSS**: Styling for the app.

## Installation and Setup

To run this project locally, follow these steps:

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

4.	Open your browser and go to http://localhost:3000 to see the app in action.

## Folder Structure

- `src/`: Contains the source code for the application.
  - `App.js`: Main component where the ToDo list logic is implemented.
  - `index.css`: The styling for the application.

- `public/`: Contains the public assets and the `index.html` file.

- `package.json`: Lists the project dependencies.

## Customization

- You can customize the notifications by editing the settings in `react-notifications`.
- Modify styles in the `index.css` file to change the look and feel of the app.

## Usage

1. Add a task using the input field and click the "+" button.
2. Edit or delete tasks using the "Edit" and "x" buttons, respectively.
3. Mark tasks as completed by clicking on the task itself.

## Demo

You can view a video demo of this project from this repo.

## License

This project is licensed under the MIT License.
