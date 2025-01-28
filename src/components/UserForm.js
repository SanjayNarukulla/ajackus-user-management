import React, { useState, useEffect } from "react";
import "./UserForm.css";

export function UserForm({ selectedUser, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    website: "", // Changed 'department' to 'website'
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="user-form-container">
      <h2>{selectedUser ? "Edit User" : "Add New User"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label>Website</label> {/* Changed to Website */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {selectedUser ? "Update" : "Add"}
          </button>
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
