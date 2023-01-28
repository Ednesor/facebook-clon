import React from "react";
import styled from "styled-components";
import { IoBook } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import { useState } from "react";

const Container = styled("div")({
    backgroundColor: "#242526",
    width: "100%",
    height: "300px",
    borderRadius: "8px"
})
const OptionContainer = styled("div")({
    height: "60px",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid #323332",
})
const Option = styled("div")({
    width: "47%",
    height: "57px",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "3px solid #2E89FF",
})
const OpTitle = styled("span")({
    color: "#2E89FF",
    fontWeight: "500",
    marginLeft: "10px",
    fontSize: "15px",
})
const StoriesLogo = styled(IoBook)({
    color: "#2E89FF",
})
const ReelsLogo = styled(MdMovieFilter)({
    color: "#2E89FF",
})
const ContentContainer = styled("div")({

})

export default function Stories() {
    const [storie, setStorie] = useState(true);
    return (
        <Container>
            <OptionContainer>
                <Option>
                    <StoriesLogo size={25} />
                    <OpTitle>Historias</OpTitle>
                </Option>
                <Option>
                    <ReelsLogo size={25} />
                    <OpTitle>Reels</OpTitle>
                    <p as={OpTitle}>Hola</p>
                </Option>
            </OptionContainer>
            <ContentContainer>

            </ContentContainer>
        </Container>

    )
}