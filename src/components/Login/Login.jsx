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
    height: "90vh",
})

export default function Login() {
    return (
        <div>
            <Container>
                <Sesion />
                <LoginForm />
            </Container>
                <Footer />
        </div>
    )
}