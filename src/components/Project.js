import React, { useEffect, useState, Fragment } from "react"
import { gql } from "graphql-request"
import { Image } from "react-datocms"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Spinner } from "reactstrap"
import ProjectsBar from "./ProjectsBar"
import client from "../client.js"
import Gallery from "./Gallery"

const Project = () => {
  const [project, setProject] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  const { url } = useParams()
  const variables = {
    projectUrl: url,
  }

  useEffect(() => {
    setIsFetching(true)
    const queryProject = async () => {
      try {
        const result = await client.request(query, variables)
        setProject(result.proyecto)
        setIsFetching(false)
      } catch (e) {
        console.log(e)
      }
    }
    queryProject()
  }, [url])

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col sm="12" md="8">
          {!isFetching ? (
            <Fragment>
              <h2 className="font-weight-bold text-center text-white mb-2">
                {project.titulo}
              </h2>
              <Container fluid>
                <Row className="justify-content-between">
                  <Col md="6">
                    <p className="text-white">
                      Fecha:{" "}
                      <span className="text-format">{project.fecha}</span>
                    </p>
                  </Col>
                  <Col md="6">
                    <p className="text-white text-right">
                      Ubicacion:{" "}
                      <span className="text-format">{project.ubicacion}</span>
                    </p>
                  </Col>
                </Row>
              </Container>
              <Image data={project.portada.responsiveImage} />
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: project.descripcion }}
              />
              <Gallery projectUrl={url} />
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
        <ProjectsBar actualProject={url} />
      </Row>
    </Container>
  )
}

const query = gql`
  query($projectUrl: String!) {
    proyecto(filter: { url: { eq: $projectUrl } }) {
      titulo
      portada {
        responsiveImage {
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
      fecha
      ubicacion
    }
  }
`

export default Project
