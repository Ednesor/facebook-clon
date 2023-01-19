import React from "react";
import styled from "styled-components";

const Container = styled("div")({
    width: "295px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "10px",
})
const Logo = styled("img")({
    width: "40px",
    cursor: "pointer"
})
const Search = styled("input")({
    width: "225px",
    height: "38px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#3A3B3C",
    fontSize: "14px",
    paddingLeft: "15px",
    color: "white",
    "&::placeholder": {
        color: "#9EA0A2",
    },
    "&:focus": {
        outline: "none"
    }
})

export default function Header() {
    return (
        <Container>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="fb" />
            <Search type="text" name="search" id="search" placeholder="Buscar en Facebook" />
        </Container>
    )
}