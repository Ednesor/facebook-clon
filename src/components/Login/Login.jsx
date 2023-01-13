import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Sesion from "./Sesion"

const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "8px",
})

export default function Login() {
    return (
        <Container>
            <Sesion />
            <LoginForm />
            <Footer />
        </Container>
    )
}