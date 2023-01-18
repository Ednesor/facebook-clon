import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Sesion from "./Sesion";

const Container = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "80px",
    '@media(max-width: 1000px)': {
        width: "100%",
        marginTop: "0px",
    }
});
const SubContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "8px",
    width: "70%",
    maxWidth: "1000px",
    flexWrap: "wrap",
    marginLeft: "-20px",
    height: "650px",
    '@media(max-width: 1200px)': {
        width: "80%",
    },
    '@media(max-width: 1000px)': {
        width: "100%",
        height: "auto",
        marginLeft: "0px",
        justifyContent: "center",
        marginBottom: "150px"
    },
});

export default function Login() {
    return (
        <Container>
            <SubContainer>
                <Sesion />
                <LoginForm />
            </SubContainer>
            <Footer />
        </Container>
    )
};