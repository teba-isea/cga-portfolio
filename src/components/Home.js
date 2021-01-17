/* eslint-disable no-empty-pattern */
import React, { useEffect, useState } from "react"
import { Container, Row, Col, Spinner } from "reactstrap"
import client from "../client.js"

import Hero from "./Hero"
import ProjectItem from "./ProjectItem.jsx"
const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const queryProjects = async query => {
      try {
        const res = await client.request(query)
        setProjects(res.allProyectos)
      } catch (e) {
        console.log(e)
      }
    }
    queryProjects(query)
  }, [])

  return (
    <>
      <Hero />
      <Container>
        <Row className="justify-content-center">
          <Col md="12 m-0 p-0">
            <h1 className="text-center my-5">Nuestros Proyectos</h1>
            <Row className="justify-content-center pt-2">
              {projects.length > 0 ? (
                projects.map(project => (
                  <ProjectItem key={project.url} projectData={project} />
                ))
              ) : (
                <Spinner
                  style={{ width: "6rem", height: "6rem" }}
                  color="warning"
                />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const query = `
  query {
    allProyectos(orderBy: fecha_DESC) {
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
      url
    }
  }
`

export default Home
