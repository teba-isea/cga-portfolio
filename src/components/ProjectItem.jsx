import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-datocms";
import { Col } from "reactstrap";
import "./ProjectItem.css";
const ProjectItem = ({ projectData }) => {
  const { tituloMiniatura, portada, url } = projectData;
  return (
    <Col sm="8" md="4" lg="3" className="mb-3 mx-2 mx-md-0">
      <Link to={`/proyectos/${url}`}>
        <div className="mosaic">
          <div className="mosaic-image">
            <Image data={portada.responsiveImage} />
            <div className="mosaic-data py-2 py-md-3">
              <div className="flexbox">
                <div className="row align-items-center justify-content-center text-wrap">
                  <p className="px-3 my-auto d-block w-100 meta-title font-weight-bold text-uppercase text-break text-center">
                    {tituloMiniatura}
                  </p>
                  <hr className="separator" />
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
