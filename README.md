# FinanceTracker Application

## Overview

FinanceTracker is a web application designed to help users manage their personal finances. It allows users to track their income and expenses, view their financial data in a dashboard, and gain insights into their spending habits.

## Features

- **User Authentication:** Secure user registration and login system.
- **Transaction Management:**
  - Add new income and expense transactions.
  - View a list of all transactions.
  - Categorize transactions.
- **Dashboard:**
  - Visualize financial data with charts and graphs.
  - Get a summary of income, expenses, and net balance.
- **Responsive Design:** Accessible and usable on various devices (desktops, tablets, and mobile phones).
- **Logout:** Securely logout from the application.

## Technologies Used

**Frontend (React):**

- **React:** JavaScript library for building user interfaces.
- **React Router:** For client-side routing and navigation.
- **React Bootstrap:** UI component library for building responsive layouts.
- **React Icons:** For using icons in the application.
- **Context API:** For managing user authentication state.
- **Axios:** For making HTTP requests to the backend API.

**Backend (Express.js):**

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user and transaction data.
- **Mongoose:** MongoDB object modeling tool.
- **JWT (JSON Web Tokens):** For user authentication and authorization.
- **Bcrypt:** For hashing and salting passwords.
- **Cors:** For enabling Cross-Origin Resource Sharing.
- **dotenv:** For managing environment variables.

## Getting Started

### Prerequisites

- **Node.js and npm:** Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).
- **MongoDB:** You need a running MongoDB instance. You can either install it locally or use a cloud-based service like MongoDB Atlas.

### Installation and Setup

`````bash
**1. Clone the Repository:**
git clone <repository-url>
cd FinanceTracker/Backend

**2. Install Dependencies:**
npm install

**3. Run the Server:**
npm run start

// Similar steps for Frontend Application
````
`````
