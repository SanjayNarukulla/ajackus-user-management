# ajackus-user-management

A simple React-based User Management Application where users can add, edit, delete, and search for users. The app is designed to manage a list of users fetched from a public API and supports pagination for user convenience.

## Features

- **User Listing**: Displays a paginated list of users
- **Search**: Search users by name or username
- **Add User**: Add a new user to the list
- **Edit User**: Edit the details of an existing user
- **Delete User**: Delete a user from the list
- **Pagination**: Navigate through the users' list with pagination controls
- **Error Handling**: Displays meaningful error messages in case of failed API requests

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface
- **React Hooks**: useState, useEffect for state and lifecycle management
- **CSS**: For styling the components
- **Error Boundaries**: To catch JavaScript errors in the component tree and display a fallback UI
- **JSONPlaceholder API**: Used as a mock API for fetching users data

## Installation

1. Clone the repository:
```bash
[git clone https://github.com/yourusername/user-management-app.git](https://github.com/SanjayNarukulla/ajackus-user-management.git)
```

2. Navigate to the project directory:
```bash
cd ajackus-user-management
```

3. Install the dependencies:
```bash
npm install
```

## Usage

To start the application locally:

1. Run the development server:
```bash
npm start
```

2. Open the browser and go to `http://localhost:3000`

## Directory Structure

```
/src
  /components
    /UserForm
      UserForm.css    # Styling for the UserForm component
      UserForm.js     # Handles the form for adding and editing users
    /UserList
      UserList.js     # Displays the list of users
      UserList.css    # Styling for the UserList component
    /ErrorBoundary  
      ErrorBoundary.js # Catches JavaScript errors in components
      ErrorBoundary.css # Styling for the ErrorBoundary component
  App.js             # Main app component
  App.css            # Global and component-specific styling
  index.js           # Entry point for the app
  index.css          # Basic styling for root element
```

## Challenges Faced

- **API Data Handling**: Ensuring the user data is correctly fetched and displayed in a paginated format was a bit tricky. To handle this, I implemented logic to slice the data array into smaller chunks to display a limited number of users per page.
- **Error Handling**: Fetching data from an external API can sometimes fail. I implemented error boundaries and appropriate loading states to handle these failures gracefully.
- **State Management**: Managing the state for user additions, edits, and deletions required careful tracking of user data. I used React's `useState` hook for managing the current user state and form visibility.

## Features to Implement

- **User Authentication**: Add functionality to authenticate users
- **Persistent Data**: Implement local storage or integrate a real database to save user data
- **Sorting**: Add sorting options to arrange users by name, username, or other attributes

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit them (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new pull request

## License

This project is open-source and available under the MIT License.

---

### Updates
- **Directory Structure**: Updated to include the UserForm folder containing both UserForm.css and UserForm.js inside the components folder
