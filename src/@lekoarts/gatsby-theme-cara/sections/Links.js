import React from "react";
import styled from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faGithub}
        style={{ fontSize: "80", margin: "2vh" }}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        style={{ fontSize: "80", margin: "2vh", color: "#0e76a8" }}
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{ fontSize: "80", margin: "2vh" }}
      />
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
