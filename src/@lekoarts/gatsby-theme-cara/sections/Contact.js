import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ContactPic from "./pics/contactMe.svg";

const Contact = () => {
  const classes = useStyles();

  return (
    <Container>
      <ContactMe method="post" action="https://formspree.io/moqkprwq">
        {/* <FormWrapper> */}
        <TextField
          label="Full name"
          variant="outlined"
          name="name"
          className={classes.textField}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="_replyto"
          className={classes.textField}
        />
        {/* </FormWrapper> */}
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          className={classes.textField}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          type="submit"
        >
          Submit
        </Button>
      </ContactMe>
      <ImgContainer>
        <img
          src={ContactPic}
          style={{ height: "100%", width: "100%" }}
          alt="contact me cooperative"
        />
      </ImgContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-around;
  align-items: center;
  /* height: 40vh; */
`;

const ContactMe = styled.form`
  margin-top: -0.5rem;
  margin-bottom: -1rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
`;

const useStyles = makeStyles({
  textField: {
    backgroundColor: "#fff",
    textShadow: "rgba(255,255,255,0.15) ",
    width: "100%",
    marginTop: "2vh",
  },
  btn: {
    marginTop: "2vh",
  },
});

// const FormWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 48%);
//   align-items: center;
//   justify-content: space-between;
// `;
