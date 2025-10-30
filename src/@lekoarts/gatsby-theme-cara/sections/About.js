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
        {/* <FontAwesomeIcon
          style={{ fontSize: "10vw", color: "#e54d26" }}
          icon={faHtml5}
        /> */}
        <FontAwesomeIcon
          style={{ fontSize: "10vw", color: "#61dafb" }}
          icon={faReact}
        />
        <FontAwesomeIcon
          style={{ fontSize: "10vw", color: "#f0db4f" }}
          icon={faJsSquare}
        />
        {/* <FontAwesomeIcon
          style={{ fontSize: "10vw", color: "#83CD29" }}
          icon={faNodeJs}
        /> */}
        <img
          src="https://www.vectorlogo.zone/logos/python/python-ar21.svg"
          alt="python icon"
          style={{ width: "10vw" }}
        />
        <img
          src="https://www.vectorlogo.zone/logos/isocpp/isocpp-ar21.svg"
          alt="cpp icon"
          style={{ width: "10vw" }}
        />
        <img
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
          alt="mongodb icon"
          style={{ width: "10vw" }}
        />
        <img
          src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
          alt="expressjs icon"
          style={{ width: "10vw" }}
        />
        <img
          src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg"
          alt="tensorflow icon"
          style={{ width: "10vw" }}
        />
      </IconContainer>
      <TechDescribe>
        <DescribeDiv>Numpy</DescribeDiv>
        <DescribeDiv>Node.js</DescribeDiv>
        <DescribeDiv>Html5</DescribeDiv>
        <DescribeDiv>Redux</DescribeDiv>
        <DescribeDiv>Pandas</DescribeDiv>
        <DescribeDiv>Flask</DescribeDiv>
        <DescribeDiv>CSS3</DescribeDiv>
        <DescribeDiv>ContextAPI</DescribeDiv>
        <DescribeDiv>Matplotlib</DescribeDiv>
        <DescribeDiv>mongoose</DescribeDiv>
        <DescribeDiv>RESTfulAPI</DescribeDiv>
        <DescribeDiv>ReactHooks</DescribeDiv>
        <DescribeDiv>Scikit-learn</DescribeDiv>
        <DescribeDiv>OOP</DescribeDiv>
        <DescribeDiv>C</DescribeDiv>
        <DescribeDiv>And more...</DescribeDiv>
      </TechDescribe>
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
  margin-bottom: 4vh;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TechDescribe = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: 5vw;
`;

const DescribeDiv = styled.div`
  margin: 2vw;
  text-align: center;
  font-weight: 600;
  font-size: 3vh;
  flex-basis: 20%;
`;
