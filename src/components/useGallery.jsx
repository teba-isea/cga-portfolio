import React, { useState } from "react"
import ReactBnbGallery from "react-bnb-gallery"

const useGallery = (imagesUrl) => {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState(imagesUrl)
  const Gallery = () => {
    return (
      <>
        <ReactBnbGallery
          show={isOpen}
          photos={images}
          onClose={() => setIsOpen(false)}
        />
      </>
    )
  }

  return [setIsOpen, setImages, Gallery]
}

export default useGallery
