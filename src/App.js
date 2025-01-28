import React, { useState, useEffect } from "react";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const itemsPerPage = 5; // Number of users to display per page

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for error

  // Fetch users from the API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users from the server.");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(
          "Oops! Something went wrong while fetching users. Please try again later."
        );
        setLoading(false);
      });
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsFormVisible(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleCancel = () => {
    setSelectedUser(null);
    setIsFormVisible(false);
  };

  const handleSubmit = (data) => {
    if (selectedUser) {
      // Edit user
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...user, ...data } : user
        )
      );
    } else {
      // Add new user
      setUsers([...users, { ...data, id: users.length + 1 }]);
    }
    setIsFormVisible(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate filtered users
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ErrorBoundary>
      <div className="app-container">
        <h1>User Management</h1>

        <button
          onClick={() => {
            setSelectedUser(null);
            setIsFormVisible(true);
          }}
          className="add-user-btn"
        >
          Add New User
        </button>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or username..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
            <p>Please check your internet connection and try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Retry
            </button>
          </div>
        ) : (
          <UserList
            users={currentUsers}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {isFormVisible && (
          <UserForm
            selectedUser={selectedUser}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Prev
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
