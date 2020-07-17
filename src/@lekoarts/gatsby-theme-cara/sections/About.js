import React from "react";
import styled from "styled-components";
import {
  faHtml5,
  faReact,
  faJsSquare,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <Container>
      <h1>Tech Stack</h1>
      <IconContainer>
        <FontAwesomeIcon
          style={{ fontSize: "100", color: "#e54d26" }}
          icon={faHtml5}
        />
        <FontAwesomeIcon
          style={{ fontSize: "100", color: "#61dafb" }}
          icon={faReact}
        />
        <FontAwesomeIcon
          style={{ fontSize: "100", color: "#f0db4f" }}
          icon={faJsSquare}
        />
        <FontAwesomeIcon
          style={{ fontSize: "100", color: "#83CD29" }}
          icon={faNodeJs}
        />
        <img
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
          alt="mongodb icon"
        />
        <img
          src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
          alt="expressjs icon"
        />
      </IconContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 4vh;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
