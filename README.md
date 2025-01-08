# NodeJS_Python_Todos

## Overview
This project is a full-stack application that combines a Node.js backend with a Python component. It includes user authentication and a to-do list feature.

## Project Structure
project/ ├── backend/ │ ├── server.js │ ├── routes/ │ │ ├── auth.js │ │ ├── todo.js │ ├── models/ │ │ ├── user.js │ │ ├── todo.js ├── python/ │ ├── password_handler.py │ ├── app.py ├── public/ │ ├── register.html │ ├── login.html │ ├── todos.html ├── package.json


### Backend(NodeJS)
- **server.js**: Entry point for the Node.js server.
- **routes/**: Contains route handlers.
  - **auth.js**: Handles authentication routes.
  - **todo.js**: Handles to-do list routes.
- **models/**: Contains database models.
  - **user.js**: User model.
  - **todo.js**: To-do model.

### Python
- **password_handler.py**: Handles password-related operations.
- **app.py**: Entry point for the Python application.

### Public
- **register.html**: Registration page.
- **login.html**: Login page.
- **todos.html**: To-do list page.

### package.json
Contains metadata about the Node.js project and its dependencies.

## Getting Started

### Prerequisites
- Node.js
- Python
- Express.js
- MongoDB
- Flask
- HTML/CSS/JS
- Python password hashing library (e.g., bcrypt)


### Installation
1. Clone the repository.
2. Navigate to the `project/backend` directory and run:
   ```sh
   npm install