import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Contact = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();
    const url = "https://formspree.io/moqkprwq";
    let formData = new FormData();
    formData.append("Full Name", name);
    formData.append("Email", email);
    formData.append("Message", message);
    try {
      const requestOptions = { method: "POST", body: formData };
      await fetch(url, requestOptions);
      console.log("form sent");
    } catch (err) {
      console.log(err);
      console.log("fail to send");
    }
  };

  return (
    <Container>
      <ContactMe method="post" action="https://formspree.io/moqkprwq">
        <TextField
          label="Full name"
          variant="outlined"
          name="name"
          className={classes.textField}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="_replyto"
          className={classes.textField}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          className={classes.textField}
          onChange={(e) => setMessage(e.target.value)}
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
        <img src="/contactMe.svg" style={{ height: "100%", width: "100%" }} />
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
  height: 40vh;
`;

const ContactMe = styled.form``;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const useStyles = makeStyles({
  textField: {
    backgroundColor: "#fff",
    textShadow: "rgba(255,255,255,0.15) ",
    borderColor: "rgb(108, 99, 255);",
    borderRadius: "7px",
    borderWidth: "2px",
    width: "100%",
    marginTop: "2vh",
  },
  btn: {
    marginTop: "2vh",
  },
});
