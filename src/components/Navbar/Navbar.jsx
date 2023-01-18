import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";

const Container = styled("div")({
    backgroundColor: "#242526",
    height: "55px",
    borderBottom: "1px solid #696869",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})
const Header = styled("div")({
    // backgroundColor: "red",
    width: "295px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "10px",
})
const Logo = styled("img")({
    width: "40px"
})
const Search = styled("input")({
    width: "225px",
    height: "38px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#3A3B3C",
    fontSize: "14px",
    paddingLeft: "15px",
    "&::placeholder": {
        color: "#9EA0A2",
    },
    "&:focus": {
        outline: "none"
    }
})
const Sections = styled("div")({

})

export default function Navbar() {
    return (
        <Container>
            <Header>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="fb" />
                <Search type="text" name="search" id="search" placeholder="Buscar en Facebook" />
            </Header>
            <Sections>

            </Sections>
        </Container>
    )
}