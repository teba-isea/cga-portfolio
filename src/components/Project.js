import React, { useEffect, useState, Fragment } from "react";
import client from "../client.js";
import Images from "./Images";
import { gql } from "graphql-request";
import { Image } from "react-datocms";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "reactstrap";
const Project = () => {
  const [project, setProject] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const { url } = useParams();
  const variables = {
    projectUrl: url,
  };

  useEffect(() => {
    const queryProject = async () => {
      try {
        const result = await client.request(query, variables);
        setProject(result.proyecto);
        setIsFetching(false);
      } catch (e) {
        console.log(e);
      }
    };
    queryProject();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col sm="12" md="8">
          {!isFetching ? (
            <Fragment>
              <h1 className="font-weight-bold text-center text-white mb-5">
                {project.titulo}
              </h1>
              <Images items={project.imagenes} />
              <div dangerouslySetInnerHTML={{ __html: project.descripcion }} />
            </Fragment>
          ) : (
            <Row className="justify-content-center pt-5">
              <Spinner
                style={{ width: "6rem", height: "6rem", padding: "8rem" }}
                color="warning"
              />
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const query = gql`
  query($projectUrl: String!) {
    proyecto(filter: { url: { eq: $projectUrl } }) {
      titulo
      imagenes {
        responsiveImage {
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
      descripcion(markdown: true)
    }
  }
`;

export default Project;
