import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-datocms";
import { Col } from "reactstrap";
import "./ProjectItem.css";
const ProjectItem = ({ projectData }) => {
  const { titulo, imagenes, descripcion, url } = projectData;
  console.log(url);
  return (
    <Col sm="8" md="4">
      <Link to={`/proyectos/${url}`}>
        <div className="mosaic">
          <div className="mosaic-image">
            <Image data={imagenes[0].responsiveImage} />
            <div className="mosaic-data py-2 py-md-3">
              <div className="flexbox">
                <div className="flexbox-item">
                  <h2 className="meta-title">{titulo}</h2>
                  <hr className="separator" />
                  <span className="meta-description">
                    {descripcion.slice(0, 178)}...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProjectItem;
