import React from "react";
import Student from "./Student";
import students from "./Students";
import "./StudentsList.css";

const StudentsList = () => {
    return (
        <div className="students-container">
            <h1>Student Progress Tracker</h1>
            <div className="students-cards">
                {students.map((student, index) => (
                    <Student key={index} {...student} />
                ))}
            </div>
        </div>
    );
};

export default StudentsList;