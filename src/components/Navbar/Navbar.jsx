import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import Sections from "./Sections";

const Container = styled("div")({
    backgroundColor: "#242526",
    height: "55px",
    borderBottom: "1px solid #404040",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
})

export default function Navbar() {
    return (
        <Container>
            <Header />
            <Sections />
            <Menu />
        </Container>
    )
}