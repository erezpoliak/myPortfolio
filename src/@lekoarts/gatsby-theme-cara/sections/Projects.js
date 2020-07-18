import React from "react";
import styled from "styled-components";
import {
  faHtml5,
  faCss3Alt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <>
      <IconWrapper>
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: "3.5vw", color: "#e54d26" }}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ fontSize: "3.5vw", marginLeft: "1.5vw", color: "#2965f1" }}
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: "3.5vw", marginLeft: "1.5vw", color: "#61dafb" }}
        />
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: "3.5vw", color: "#e54d26" }}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ fontSize: "3.5vw", marginLeft: "1.5vw", color: "#2965f1" }}
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: "3.5vw", marginLeft: "1.5vw", color: "#61dafb" }}
        />
        <img
          src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
          alt="expressjs icon"
          style={{ width: "3.5vw", marginLeft: "1.5vw" }}
        />
        <img
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
          alt="expressjs icon"
          style={{ width: "3.5vw", marginLeft: "1.5vw" }}
        />
        <img
          src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg"
          alt="expressjs icon"
          style={{ width: "3.5vw", marginLeft: "1.5vw" }}
        />
      </IconWrapper>
    </>
  );
};

export default Projects;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 3vw; */
  @media (max-width: 600px) {
    display: none;
  }
`;
