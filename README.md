# 🚀 URL Shortener - MERN Stack Project 🌐

Welcome to the **URL Shortener** project built with the **MERN stack** (MongoDB, Express, React, Node.js). This project allows users to shorten long URLs and track analytics for shortened links. It's a fun and personal learning project to understand the MERN stack in depth. Inspired by popular tools like **Bitly**, this app lets you easily create short, shareable URLs. ✂️🔗

## 🛠️ Project Overview

This URL Shortener app provides two main features:

1. **Shortening URLs** 📝
   - Users can enter long URLs, and the app will generate a short version of the URL.

2. **URL Analytics** 📊
   - Users can fetch analytics for any shortened URL by entering its unique short ID.

## 🏗️ Technologies Used

- **MongoDB** 🗄️ - NoSQL Database
- **Express.js** ⚡ - Web framework for Node.js
- **React.js** ⚛️ - Frontend JavaScript library
- **Node.js** 🚀 - JavaScript runtime

## 🌟 Features

- Generate short URLs instantly 🔗
- Track the number of clicks for each shortened URL 📊
- Built with love using JavaScript and the MERN stack ❤️

## 📸 Screenshots

### Website View

Here’s a preview of the project in action:

![Website Screenshot](./3-Shorten-Url/images/website.png)

### Analytics Feature

The analytics section allows users to track the clicks for a specific shortened URL:

![Analytics Screenshot](./3-Shorten-Url/images/website2.png)

## 💡 How to Use

1. **Shorten a URL**: 
   - Go to the main page, enter the long URL, and click **Shorten ✂️**.
   - A short URL will be generated, and you can click on it to open the original link.
   
2. **Track Analytics**:
   - Enter the short ID of the URL you want to track in the **Fetch URL Analytics** section.
   - You'll see the total number of clicks and additional details.

## 🖥️ Installation

To run this project locally, follow these steps:

1. Clone the repository:


---

# Node.js Project

This is a basic Node.js project that demonstrates essential concepts and best practices for building and running a server-side application using Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Concepts](#basic-concepts)
  - [What is Node.js?](#what-is-nodejs)
  - [Modules](#modules)
  - [Express.js](#expressjs)
  - [Event Loop](#event-loop)
  - [Callback Functions](#callback-functions)
  - [Asynchronous Programming](#asynchronous-programming)
  - [Environment Variables](#environment-variables)
  - [Error Handling](#error-handling)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Introduction

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed to build scalable network applications, and it works on a non-blocking, event-driven I/O model. This allows for highly scalable and efficient applications, making it popular for web servers, APIs, and microservices.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-node-project.git
   ```

2. Navigate into the project directory:
   ```bash
   cd your-node-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

The application will now be running on `http://localhost:3000`.

## Basic Concepts

### What is Node.js?

Node.js is a runtime environment for executing JavaScript code outside of a browser. It allows developers to use JavaScript for server-side development. It uses the V8 JavaScript engine (the same one used by Google Chrome) to execute code, and its non-blocking I/O model makes it ideal for building scalable network applications.

### Modules

Node.js uses the CommonJS module system. This means that you can include and share code between files using the `require()` function. For example:

```javascript
const http = require('http'); // Importing the built-in 'http' module
```

Modules can be built-in (like `http`, `fs`, etc.), local files (your custom code), or third-party modules installed via `npm`.

### Express.js

[Express.js](https://expressjs.com/) is a minimal and flexible Node.js web application framework. It simplifies routing, middleware management, and request handling. You can define routes to handle HTTP requests, like:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### Event Loop

The event loop is at the heart of Node.js. It's what allows Node.js to handle multiple requests asynchronously. Node.js uses a single-threaded event loop to execute code, handle requests, and perform I/O operations like reading from a database or a file system.

### Callback Functions

Callbacks are functions passed as arguments to other functions. They are used in asynchronous operations to handle results or errors after a task completes. For example, in Node.js, file reading is done asynchronously using callbacks:

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Asynchronous Programming

Node.js heavily relies on asynchronous programming to prevent blocking the event loop. Asynchronous operations allow Node.js to execute non-blocking code, such as database queries or file operations, while still handling other requests. Promises and `async/await` are commonly used for handling asynchronous code in a more readable way.

Example using `async/await`:

```javascript
const fetchData = async () => {
  try {
    const data = await someAsyncFunction();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

### Environment Variables

Environment variables allow you to store sensitive information like API keys and database credentials outside your codebase. In Node.js, you can use the `process.env` object to access these variables. It’s a good practice to keep environment variables in a `.env` file and use libraries like [dotenv](https://www.npmjs.com/package/dotenv) to load them.

Example `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
```

To use them in your code:

```javascript
require('dotenv').config(); // Load .env variables
console.log(process.env.DB_HOST); // Access DB_HOST environment variable
```

### Error Handling

Error handling is crucial in any application. In Node.js, errors can be caught and handled using `try/catch` blocks for synchronous code, and `.catch()` for promises. For asynchronous functions, you can use `async/await` along with `try/catch`:

```javascript
const someAsyncFunction = async () => {
  try {
    // Your async code here
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
```

## Usage

After setting up the application with the instructions above, you can:

- Send HTTP requests to interact with the API.
- Use routes defined in the `routes` directory to access different parts of the application.
- Modify the code to add new features and functionalities.

## Project Structure

```
your-node-project/
│
├── node_modules/        # Project dependencies (generated by npm)
├── public/              # Public files (static assets, images, etc.)
├── src/                 # Source code
│   ├── controllers/     # Handle request logic
│   ├── models/          # Database models or data schemas
│   ├── routes/          # API routes
│   ├── app.js           # Main application setup
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation (this file)
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README.md` template covers the basic Node.js concepts and sets the foundation for creating a simple Node.js application. You can customize and expand the content as per your project needs.