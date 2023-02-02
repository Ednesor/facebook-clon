import React from "react";
import styled from "styled-components";
import Stories from "./Stories";

const Container = styled("div")({
    width: "580px",
    marginTop: "25px"
})

export default function HomePage(){
    return(
        <Container>
            <Stories />
        </Container>
    )
}