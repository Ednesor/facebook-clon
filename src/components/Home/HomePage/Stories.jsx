import React from "react";
import styled from "styled-components";
import { IoBook } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import { useState } from "react";
import Storie from "./Storie";

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
    userSelect: "none",
})
const styleStory = {
    borderBottom: "3px solid #2E89FF",
    borderRadius: "0px",
    backgroundColor: "#242526",
};
const noStyleStory = {

};
const Option = styled("div")({
    width: "47%",
    height: "52px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginTop: "5px",
    marginLeft: "2px",
    marginRight: "2px",
    borderRadius: "10px",
    transition: "background-color .15s",
    "&:hover": {
        backgroundColor: "#3A3B3C",
    }
})
const OpTitle = styled("span")({
    color: "#2E89FF",
    fontWeight: "500",
    marginLeft: "10px",
    fontSize: "15px",
    userSelect: "none",
})
const StoriesLogo = styled(IoBook)({
    color: "#2E89FF",
    userSelect: "none",
})
const ReelsLogo = styled(MdMovieFilter)({
    color: "#2E89FF",
    userSelect: "none",
})
const ContentContainer = styled("div")({

})

export default function Stories() {
    const [story, setStory] = useState(true);
    return (
        <Container>
            <OptionContainer>
                <Option style={story ? styleStory : {}} onClick={() => setStory(true)}>
                    <StoriesLogo style={story ? {} : {color: "#B8BBBF"}} size={25} />
                    <OpTitle style={story ? {} : {color: "#B8BBBF"}}>Historias</OpTitle>
                </Option>
                <Option style={story ? {} : styleStory} onClick={() => setStory(false)}>
                    <ReelsLogo style={story ? {color: "#B8BBBF"} : {}} size={25} />
                    <OpTitle style={story ? {color: "#B8BBBF"} : {}}>Reels</OpTitle>
                </Option>
            </OptionContainer>
            <ContentContainer>
                <Storie />

            </ContentContainer>
        </Container>

    )
}