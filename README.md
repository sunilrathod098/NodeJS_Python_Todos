# NodeJS_Python_Todos

## Overview
This project is a full-stack application combining a Node.js backend and a Python microservice. It includes user authentication, password hashing, and a to-do list management feature. The project showcases communication between Node.js and Python services using APIs.

## Project Structure
```bash
project/
├── backend/
│ ├── server.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── todo.js
│ ├── models/
│ │ ├── user.js
│ │ ├── todo.js
│ ├── controllers/
│ │ ├── user.controller.js
│ │ ├── todo.controller.js
│ ├── config/
│ ├── db.config.js
├── python/
│ ├── password_handler.py
│ ├── app.py
├── public/
│ ├── register.html
│ ├── login.html
│ ├── todos.html
├── package.json


### Backend (Node.js)
- **`server.js`**: Entry point for the Node.js backend server, which serves static files and handles API requests.
- **`routes/`**: Defines API endpoints.
  - **`auth.js`**: Manages user authentication routes.
  - **`todo.js`**: Manages to-do list-related routes.

- **`models/`**: Contains database schema definitions.
  - **`user.js`**: Schema for user data.
  - **`todo.js`**: Schema for to-do items.

- **`controllers/`**: Contains logic for handling API requests.
  - **`user.controller.js`**: Manages user operations (e.g., registration, login).
  - **`todo.controller.js`**: Handles CRUD operations for to-dos.
  
- **`config/`**: Stores configuration files.
  - **`db.config.js`**: MongoDB connection configuration.

### Python Microservice
- **`password_handler.py`**: Contains functions for password hashing and verification using libraries like `bcrypt`.
- **`app.py`**: Runs the Python Flask application to handle password-related operations via APIs (`/hash` and `/verify`).

### Frontend (Public)
- **`register.html`**: User registration page.
- **`login.html`**: User login page.
- **`todos.html`**: User dashboard for managing to-do items.

### Dependencies
- **Node.js**: JavaScript runtime for the backend.
- **Python**: Used for the microservice handling password operations.
- **Express.js**: Framework for building the Node.js backend.
- **MongoDB**: Database for storing user and to-do data.
- **Flask**: Framework for the Python microservice.
- **HTML/CSS/JS**: Frontend development.

## Features
1. **User Authentication**: 
   - Registration with hashed passwords.
   - Login with password verification.
2. **To-Do Management**:
   - Add, update, delete, and mark to-dos as completed.
3. **Microservices Communication**:
   - Node.js communicates with Python for password hashing and verification.
4. **RESTful API**:
   - Modular endpoints for user and to-do operations.

## Getting Started

### Prerequisites
Ensure the following are installed:
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)
- Python Libraries:
  - Flask
  - bcrypt

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sunilrathod098/signature_verification.git


Navigate to the backend directory:
`cd project/backend`

Install Node.js dependencies:
`npm install`

Start the Node.js server:
`node server.js`

Navigate to the Python directory:
`cd ../python`

Install Python dependencies:
`pip install -r requirements.txt`

Start the Python Flask application:
`python app.py`
- Open your browser and navigate to http://localhost:5000 for the Node.js backend or http://127.0.0.1:5000 for the Python service.

### API Endpoints
#### Node.js
##### User Routes:
- `POST /api/auth/register`: Registers a new user.
- `POST /api/todo/login`: Authenticates a user.

##### Todo Routes:
- `POST /api/todo/`: Create todos for a user.
- `GET /api/todo/:todoId`: Fetch a new to-do item.
- `PUT /api/todo/:todoId`: Updates a to-do item.
- `DELETE /api/todo/:todoId`: Deletes a to-do item.

### Python
#### Password Routes:
- `POST /hash:` Hashes a password.
- `POST /verify:` Verifies a password against a hash.

## Contribution
- Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss your proposed changes.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

- ```bash This updated README provides more structure, additional details about the project's features, and better instructions for setup and usage. Let me know if further tweaks are needed!
