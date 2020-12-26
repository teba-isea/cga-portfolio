import React, { useState, useEffect, Fragment } from "react"
import Image from "react-datocms"
import { gql } from "graphql-request"
import ReactBnbGallery from "react-bnb-gallery"
import { Spinner, Container, Row, Col } from "reactstrap"
import "react-bnb-gallery/dist/style.css"
import client from "../client.js"

const Gallery = ({ projectUrl }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])
  const [imageIndex, setImageIndex] = useState(0)
  const variables = {
    projectUrl,
  }

  const selectImage = (imageSrc) => {
    const position = images.findIndex(
      (image) => image.responsiveImage.src === imageSrc
    )
    console.log(position)
    setImageIndex(position)
    setIsOpen(true)
  }

  useEffect(() => {
    const queryImages = async () => {
      try {
        const result = await client.request(query, variables)
        const {
          proyecto: { imagenes, portada },
        } = result
        const imagesUrl = [portada, ...imagenes]

        setImages(imagesUrl)
      } catch (e) {
        console.log(e)
      }
    }
    queryImages()
  }, [projectUrl])

  return (
    <Container fluid className="my-3">
      {images.length > 0 ? (
        <Fragment>
          <Row className="justify-content-center py-2">
            {images.slice(1).map((image) => (
              <Col
                sm="6"
                md="3"
                key={image.responsiveImage.src}
                className="m-1 p-0 hover shadow"
              >
                <img
                  src={image.responsiveImage.srcSet}
                  className="img-fluid"
                  onClick={() => selectImage(image.responsiveImage.src)}
                />
              </Col>
            ))}
          </Row>
          <ReactBnbGallery
            show={isOpen}
            photos={images.map((image) => image.responsiveImage.srcSet)}
            onClose={() => setIsOpen(false)}
            backgroundColor="rgba(0,0,0,0.95)"
            activePhotoIndex={imageIndex}
          />
        </Fragment>
      ) : (
        <Spinner
          style={{ width: "6rem", height: "6rem", padding: "8rem" }}
          color="warning"
        />
      )}
    </Container>
  )
}

const query = gql`
  query($projectUrl: String!) {
    proyecto(filter: { url: { eq: $projectUrl } }) {
      portada {
        responsiveImage {
          srcSet
        }
      }
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
    }
  }
`

export default Gallery
