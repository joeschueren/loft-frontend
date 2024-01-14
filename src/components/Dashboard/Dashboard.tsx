import "./dashboard.css";
import { useState, useEffect } from "react";

const Dashboard: React.FC = () => {

    const url = (process.env.NODE_ENV === "production" ?
        "https://equal-pinto-brochure.glitch.me" :
        "http://localhost:5000");

    return(<div className="page">
        <div className="dashboard-container">
            <div className="create">
                <p className="dashboard-header">Create a New Post</p>
                <p className="dashboard-text">Add a new post to your blog</p>
                <a className="dashboard-button" href="/Compose">Create</a>
            </div>
            <div className="update">
                <p className="dashboard-header">Update a Post</p>
                <p className="dashboard-text">Update an existing blog post by making changes</p>
                <a className="dashboard-button" href="/Update">Update</a>
            </div>
            <div className="delete-container">
                <p className="dashboard-header">Delete a Post</p>
                <p className="dashboard-text">Delete an existing blog post</p>
                <a className="delete-button" href="/Delete">Delete</a>
            </div>
        </div>
    </div>)
}

export default Dashboard;