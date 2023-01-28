import React from "react";
import styled from "styled-components";
import HomePage from "./HomePage/HomePage";
import MenuOptions from "./MenuOptions";
import RightMenu from "./RightMenu";

const Container = styled("div")({
    backgroundColor: "#18191A",
    paddingTop: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "100vh"
});

export default function Home() {
    return (
        <Container>
            <MenuOptions />
            <HomePage />
            {/* <RightMenu /> */}
        </Container>
    )
}