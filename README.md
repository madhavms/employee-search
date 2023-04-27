# Employee Search Application

This project is a React/TypeScript single page application that allows you to search and display employees.

## Technologies Used
- React
- TypeScript
- Emotion (CSS-in-JS library)
- Jest (testing library)

## Tasks
The project includes the following tasks:

### Task 1: Display a number of employees on screen
The application displays a list of employees with the following information:
- First name
- Last name
- Email (only for Finance department)
- Telephone (only for IT department)

### Task 2: Provide an Employee search functionality
The application includes a search box that allows users to search for employees by name. If no matches are found, an appropriate error message is displayed.

### Task 3: Provide an Submit functionality
The application includes a "Submit" button that logs the currently visible employees in the console.

## Getting Started
1. Clone this repository: `git clone https://github.com/example/employee-search-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Run the tests: `npm test`

## CI/CD Pipeline

The CI/CD pipeline for this project is implemented using GitHub Actions. Every push to the main branch triggers the "Build and Deploy Employee Search App" workflow. This workflow performs essential tasks such as building the application, running unit tests to ensure code validity, linting the code to enforce style guidelines, and deploying the final product to GitHub Pages for easy access.

## Husky Pre-Commit Hook
The project also has a Husky pre-commit hook that runs before a commit is made. The hook runs ESLint to check the code staged for commit.

## Application Demo

![EmployeeSearchDemo.gif](https://github.com/madhavms/high-low-chart/blob/master/images/EmployeeSearchDemo.gif)
