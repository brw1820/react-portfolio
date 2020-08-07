import React from "react";
import ProjectCard from "../components/ProjectCard"

import React, { Component } from 'react';

class Projects extends Component {
    state = {
        projects
    }
    render() {
        return (
            <Wrapper>
            <Title>Projects List</Title>
            {this.state.projects.map(project => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                occupation={project.occupation}
                location={project.location}
              />
            ))}
          </Wrapper>
        );
    }
}

export default Projects;