import React from "react";
import styled from "styled-components";
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
            <div className="loginForm">

            </div>
            <div className="footer">

            </div>
        </Container>
    )
}