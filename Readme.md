# Gaming Accessoires

## Description

This repository provides the backend for a gaming-accessories webshop. Its REST API returns accessories and accepts orders. Learners create the React frontend themselves by following the tutorial.

## Installation

1. Clone the repository

   ```bash
   git clone <URL-DES-REPOSITORYS>
   ```

   Replace `<URL-DES-REPOSITORYS>` with the GitHub URL provided to you.

   **Important**: As you are working on your own version, create a new, empty GitHub repository and follow the **create own GitHub repository** section in [frontend-tutorial.md](frontend-tutorial.md) before pushing changes. Cloning and changing `origin` is sufficient; a fork is not needed when you do not plan to contribute changes back to this repository.

2. Navigate to the project directory

   ```bash
   cd <REPOSITORY-ORDNER>
   ```

   Use the folder name created by `git clone`.

3. Install the backend dependencies

   ```bash
   cd backend
   npm install
   ```

4. Start the backend server

   ```bash
   npm run start
   ```

5. Use the HTTP request files in `backend/tests/` to inspect and test the API. In VS Code, install the REST Client extension and select **Send Request** above each request.

6. Follow [frontend-tutorial.md](frontend-tutorial.md) to create the Vite-React frontend, copy the backend logo into it, apply the provided stylesheet from `assets/index.css`, and implement the webshop. The tutorial includes the commands to install dependencies and start the frontend development server.

## Usage

After creating and starting the frontend as described in the tutorial, open the Vite URL (usually `http://localhost:5173`) to view the webshop and place orders.

## Frontend tutorial

The step-by-step German-language frontend tutorial is available in [frontend-tutorial.md](frontend-tutorial.md). It explains how to build the React webshop against the provided backend API, with references to the React theory document.

## Technologies Used

- Node.js
- Express.js
- React
- File System
- JSON
- REST API
- npm
- CORS

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
