import React from "react";

const Projectcard = () => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github Repository:</strong> {props.repo}
          </li>
        </ul>
      </div>
    </div>
    
    
  );
};

export default ProjectCard;
