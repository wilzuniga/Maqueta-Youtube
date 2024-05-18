import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../img/utube_icon.ico";
import img2 from "../img/threeLines.png";
import img3 from "../img/microphone.png";
import img4 from "../img/video-camera.png";
import img5 from "../img/active.png";
import img6 from "../img/killed.png";
import { Carrousel } from './Carrousel';
import {SideBar} from './SideBar';
import { Col, Form } from "react-bootstrap";
import { HomeWrapper } from "./HomeWrapper";

function NavBar() {
  const [show, setShow] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const handleShow = () => setShow(!show);
  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };



  return (
    <div>
      <Carrousel expanded={show}/>
      <SideBar expanded={show}/>
      <Navbar expand="xxl" className="navBar fixed-top">
        <Container fluid>
            <Col>
              <div className="image-container" 
              onMouseEnter={() => handleMouseEnter("image2")}
              onMouseLeave={handleMouseLeave}
              onClick={handleShow}>
                <img
                  className={hoveredImage === "image2" ? "hovered" : "noHovered"}
                  src={img2}
                  width="30"
                  height="30"
                  alt="threeLines"
                />
              </div>
              <Navbar.Brand href="#" className=" p-2 my-0">
                <img
                  src={img1}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="YouTube Icon"
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <div className="search-container">
                <Form className="search_bar d-flex justify-content-center">
                  <Form.Control
                    id="searchBarr"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    className="rounded-pill" 
                    style={{ backgroundColor: "#121212", color: "white", borderColor: "#212121"}}
                  />
                  <div className="image-container ms-4"
                  onMouseEnter={() => handleMouseEnter("image3")}
                  onMouseLeave={handleMouseLeave}>
                    <img
                      className={hoveredImage === "image3" ? "hovered" : "noHovered"}
                      src={img3}
                      width="30"
                      height="30"
                      alt="threeLines"
                    />
                  </div>
                </Form>
              </div>
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="image-container me-1" 
              onMouseEnter={() => handleMouseEnter("image4")}
              onMouseLeave={handleMouseLeave}>
                <img
                  className={hoveredImage==="image4" ? "hovered" : "noHovered"}
                  src={img4}
                  width="30"
                  height="30"
                  alt="threeLines"
                />
              </div>
              <div className="image-container me-1"
              onMouseEnter={() => handleMouseEnter("image5")}
              onMouseLeave={handleMouseLeave}>
                <img
                  className={hoveredImage==="image5" ? "hovered" : "noHovered"}
                  src={img5}
                  width="25"
                  height="25"
                  alt="threeLines"
                />
              </div>
              <div className="image-container me-3">
                <img
                  className={hoveredImage==="image6" ? "hovered" : "noHovered"}
                  src={img6}
                  width="40"
                  height="40"
                  alt="threeLines"
                />
              </div>
            </Col>
         
        </Container>
      </Navbar>
      
      <HomeWrapper expanded={show}/>
    </div>
    
  );
}

export default NavBar;
