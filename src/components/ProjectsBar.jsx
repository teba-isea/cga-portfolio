/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { gql } from "graphql-request";
import { Container, Row, Spinner } from "reactstrap";
import ProjectItem from "./ProjectItem";
import client from "../client.js";
import { cleanProjectsWithUrl } from "../utils";

const ProjectsBar = ({ actualProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const queryAnotherProjects = async () => {
      if (projects.length > 2) {
        const filteredProjects = cleanProjectsWithUrl(projects, actualProject);
        setProjects(filteredProjects);
        return;
      }

      const result = await client.request(query);
      const filteredProjects = cleanProjectsWithUrl(
        result.allProyectos,
        actualProject
      );
      setProjects(filteredProjects);
    };
    queryAnotherProjects();
  }, [actualProject]);

  return (
    <Container>
      <h3 className="text-center">Proyectos relacionados</h3>
      <Row className="justify-content-center pt-2 pb-5">
        {projects.length > 0 ? (
          projects
            .slice(0, 2)
            .map((project) => (
              <ProjectItem key={`${project.url}qwerty`} projectData={project} />
            ))
        ) : (
          <Spinner style={{ width: "6rem", height: "6rem" }} color="warning" />
        )}
      </Row>
    </Container>
  );
};

const query = gql`
  query {
    allProyectos {
      tituloMiniatura
      portada {
        responsiveImage(imgixParams: { w: "480", h: "480" }) {
          srcSet
          webpSrcSet
          sizes
          src

          # size information (post-transformations)
          width
          height
          aspectRatio

          # background color placeholder or...
          bgColor

          # blur-up placeholder, JPEG format, base64-encoded
          base64
        }
      }
      descripcion
      url
    }
  }
`;

export default ProjectsBar;
