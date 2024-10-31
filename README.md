# Bike Rental Backend

Welcome to the **Bike Rental Backend**! This project provides the backend API services for a bike rental platform, enabling users to view available bikes, manage rentals, and handle user authentication. The backend is built with a Node.js and Express.js server, and uses MongoDB for data storage.

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## Getting Started

To run this project locally, you'll need to clone the repository and install the dependencies listed below. Make sure you have Node.js and MongoDB installed and set up in your development environment.

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (running locally or hosted)
- Git
- Express js

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Fast and minimal web framework for Node.js.
- **MongoDB**: NoSQL database used to store user, bike, and rental data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **bcrypt**: Hashing library for securely storing passwords.
- **dotenv**: Environment variable management.
- **cookie-parser**: Parses cookies attached to the client request.

## Features

- **User Management**: Register, login, and manage users.
- **Bike Management**: Create, update, and delete bike entries.
- **Rental Management**: Rent, return, and view rented bikes.
- **Authentication & Authorization**: Secure endpoints using JWT for protected routes.
- **Error Handling**: Standardized error responses and middleware for consistent API behavior.

## Installation and Setup

Follow these steps to get the backend up and running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Sidaculas/bike-rental-backend.git
cd bike-rental-backend

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Set Up Environment Variables

Create a **.env** file in the root directory and configure the following variables:

```bash

PORT=3000                           # Port on which the server runs
NODE_ENV=development                # for production use production
DATABASE_URL=your_mongodb_uri       # MongoDB connection string
BCRYPT_SALT_ROUNDS=                 # give your preferred salt round to encrypt password
JWT_ACCESS_SECRET=your_jwt_secret   # Secret key for JWT authentication
JWT_ACCESS_EXPIRES_IN=your_preferred_time
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_REFRESH_EXPIRES_IN=your_preferred_time
```

### 4. Start The Development Server

```bash
npm run start:dev

```

### 5. API Endpoints

Below is an overview of the available API endpoints. For detailed usage, refer to the in-code documentation or API testing tools like Postman.

## Auth

- _POST api/auth/register_ - Register a new user
- _POST api/auth/login_ - Log in with user credentials

## Bikes

- _GET api/bikes_ - Get all available bikes
- _POST api/bikes_ - Add a new bike (Admin only)
- _PUT api/bikes/:id_ - Update bike details (Admin only)
- _DELETE api/bikes/:id_ - Delete a bike (Admin only)

## Rentals

- _POST api/rentals_ - Rent a bike
- _PUT api/rentals/:id/return_ - Return a rented bike
- _GET api/rentals/user_ - View user rental history
