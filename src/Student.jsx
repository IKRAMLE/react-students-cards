import React from "react";
import "./Student.css";

const Student = ({ name, progress, department, github, image, date }) => {
  return (
    <div className="student-card">
      <img src={image} alt={name} className="student-image" />
      <div className="student-info">
        <h2>{name}</h2>
        <p>
          <strong>Progress:</strong>
          {progress}
        </p>
        <p>
          <strong>Department:</strong>
          {department}
        </p>
        <p>
          <strong>Github:</strong>
          <a href={github} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </p>
        <p>
          {date}
        </p>
      </div>
    </div>
  );
};

export default Student;
