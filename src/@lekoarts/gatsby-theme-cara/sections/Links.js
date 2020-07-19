import React from "react";
import styled from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <Container>
      <a
        href="https://www.github.com/erezpoliak"
        style={{ textDecoration: "none !important", color: "inherit" }}
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ fontSize: "80", margin: "2vh" }}
        />
      </a>
      <a
        href="https://www.google.com"
        style={{ textDecoration: "none !important", color: "inherit" }}
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ fontSize: "80", margin: "2vh", color: "#0e76a8" }}
        />
      </a>
      <a
        href="mailto:poliakerez@gmail.com"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ fontSize: "80", margin: "2vh" }}
        />
      </a>
    </Container>
  );
};

export default Links;

const Container = styled.div`
  display: flex;
  margin-top: 5vh;
  align-items: center;
  justify-content: center;
`;
