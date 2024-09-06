# Flood Management Software Middleware Backend

This project is the Node.js backend that acts as a middleware between the Python machine learning backend and the React frontend. It handles the connection to MongoDB and manages all the business logic for the Flood Management Software application.

## Features

- **Middleware Functionality**
  - Connects the React frontend with the Python machine learning backend.
  - Facilitates communication between the frontend and backend services.
- **MongoDB Integration**
  - Manages database connections and operations with MongoDB.
- **Business Logic Management**
  - Handles the core business logic of the application including user management, flood prediction requests, alert systems, and evacuation planning.

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/flood-management-middleware.git
   cd flood-management-middleware
   ```

2. **Install dependencies**

   ```sh
   npm install

   # or

   yarn install
   ```

3. **Create a `.env` file**

   ```sh
   MONGO_URI=mongodb://localhost:27017/floodManagement
   PYTHON_BACKEND_URL=http://127.0.0.1:5000
   PORT=3001
   ```

4. **Run the application**
   ```sh
   npm start
   # or
   yarn start
   ```

The server will start at \`http://localhost:3001/\`.

## Project Structure

```
flood-management-middleware/
├── controllers/
│ ├── alertController.js
│ ├── authController.js
│ ├── floodPredictionController.js
│ ├── userController.js
│ └── ...
├── models/
│ ├── Alert.js
│ ├── User.js
│ └── ...
├── routes/
│ ├── alertRoutes.js
│ ├── authRoutes.js
│ ├── floodPredictionRoutes.js
│ ├── userRoutes.js
│ └── ...
├── utils/
│ ├── db.js
│ └── ...
├── .env
├── app.js
├── package.json
└── ...
```

## Key Components

- **Controllers**
  - Contains the logic for handling requests and responses.
- **Models**
  - Defines the data schemas for MongoDB collections.
- **Routes**
  - Manages the API endpoints and routes.
- **Services**
  - Handles communication with the Python machine learning backend.
- **Utils**
  - Contains utility functions and database connection logic.

## API Endpoints

### User Management

- **POST `/api/register`**
  - Registers a new user.
- **POST `/api/login`**
  - Authenticates a user and returns a token.

### Flood Prediction

- **POST `/api/predict`**
  - Sends flood prediction requests to the Python backend.
- **GET `/api/predictions`**
  - Retrieves past flood predictions.

### Alerts

- **GET `/api/alerts`**
  - Retrieves active flood alerts.
- **POST `/api/alerts`**
  - Creates a new flood alert.

### Evacuation Planning

- **GET `/api/evacuation-plans`**
  - Retrieves evacuation plans.
- **POST `/api/evacuation-plans`**
  - Creates a new evacuation plan.

## Contributing

Please fork the repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Naming Convention

- **File Naming:** Use `camelCase` for all file names (e.g., `myScript.js`, `userProfile.ts`).
  
- **Constants:** Use `FULL_CAPITAL_SNAKE_CASE` for constant variables (e.g., `MAX_RETRIES`, `DEFAULT_PORT`).

- **Interfaces:** Use `I` prefix with PascalCase for interface typescript classes (e.g., `IUser`, `IProductService`).

### Examples:
- `myScript.js`
- `userProfile.ts`
- `MAX_RETRIES`
- `IUser`, `IProductService`

Adopting these naming conventions ensures consistency and improves code readability across the project.
