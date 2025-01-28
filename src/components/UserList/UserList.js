import React from "react";
import "./UserList.css"

export function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="user-list">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th> {/* Changed to Website */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td> {/* Display website */}
              <td>
                <button onClick={() => onEdit(user)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
