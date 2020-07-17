import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Cv = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleClick = () => {
    console.log("im in the function");
    if (pageNumber === 1) setPageNumber(2);
    else setPageNumber(1);
  };

  return (
    <>
      <h1>CV</h1>
      <Container>
        <Document file="/CV-dev.pdf">
          <Page pageNumber={pageNumber} />
        </Document>
        <Footer>
          <IconWrapper>
            <FontAwesomeIcon
              pageNumber={pageNumber}
              icon={faArrowCircleLeft}
              style={{
                fontSize: "40",
                // opcaity: (prop) => (prop.pageNumber === 1 ? "0.1" : "1"),
              }}
              // onClick={() => leftClickHandler()}
              //   onClick={() => handleClick()}
            />
            <div onClick={() => handleClick()}>
              <FontAwesomeIcon
                pageNumber={pageNumber}
                icon={faArrowCircleRight}
                style={{
                  fontSize: "40",
                  //   opacity: (prop) => (prop.pageNumber === 2 ? "0.1" : "1"),
                }}
                // onClick={() => rightClickHandler()}
                // onClick={() => handleClick()}
              />
            </div>
          </IconWrapper>
        </Footer>
      </Container>
    </>
  );
};

export default Cv;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  width: 100%;
`;
