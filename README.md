# Finance Tracker App

## Project Overview

The **Finance Tracker App** is a web application designed to help users manage their finances by tracking income, expenses, and overall balance. The app enables users to log in, record financial transactions, view their current balance, and analyze spending habits through visual reports.

The application is built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), with separate deployments for the frontend and backend.

---

## Features

### 1. User Authentication

- Secure account creation and login.
- Management of user sessions to ensure data privacy.

### 2. Income and Expense Tracking

- Add income and expenses with descriptions, dates, and amounts.
- Categorize and store transactions for easy retrieval.

### 3. Balance Overview

- Display current balance based on logged transactions.
- Provide a quick breakdown of the financial status.

### 4. Financial Reports

- **Pie charts** for analyzing expense categories.
- **Line graphs** for visualizing income and expense trends over time.

### 5. Application Pages

- **Registration Page**: Interface for user account creation.
- **Login Page**: Interface for secure authentication.
- **Dashboard**: Overview of the current balance and a quick transaction add feature.
- **Transactions Page**: Detailed list of all transactions with options to add, edit, or delete.

---

## Technology Stack

### Frontend

- **React.js** for building the user interface.
- **State Management**: Context API.
- **Styling Library**: React-Bootstrap.
- **Charts**: Chart.js or Recharts.

### Backend

- **Node.js** with Express.js for server-side logic.
- **Database**: MongoDB, hosted on MongoDB Atlas.
- **Authentication**: JWT (JSON Web Tokens) for secure user sessions.

### Deployment

- **Frontend**: Hosted on Netlify or Vercel.
- **Backend**: Hosted on Render or Cyclic.

---

## Database Design

### Users Collection

- `_id`: ObjectId
- `username`: String
- `email`: String (unique)
- `password`: String (hashed)
- `createdAt`: Date

### Transactions Collection

- `_id`: ObjectId
- `userId`: ObjectId (reference to Users collection)
- `type`: String (Income/Expense)
- `amount`: Number
- `date`: Date
- `description`: String
- `createdAt`: Date

---

## Security Considerations

- Passwords are hashed using **bcrypt** for secure storage.
- **JWT** is used for authentication, stored securely in cookies.
- **HTTPS** is enforced for both frontend and backend deployments.

---

## Installation

### Prerequisites

- **Node.js** and npm installed.
- **MongoDB** setup (local or Atlas).

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/FinanceTracker.git
   ```

2. Install Dependencies for frontend and backend:
   ```bash
    cd Frontend
    npm install
    cd ../Backend
    npm install
   ```
3. Clone the repository:

   ```bash
   cd Frontend
   npm start
   cd ../Backend
   npm start
   ```

## License

This project is open-source and available under the MIT LIcense.
