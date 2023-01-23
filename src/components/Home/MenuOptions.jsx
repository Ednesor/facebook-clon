import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { data } from "../../data/MenuOptions"
import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { RiGamepadFill } from "react-icons/ri";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const Container = styled("div")({
    backgroundColor: "transparent",
    position: "fixed",
    left: "0px",
    width: "316px",
    marginTop: "10px",
    overflowY: "scroll",
    height: "90vh",
    "&::-webkit-scrollbar": {
        width: "0px",
    },
    "&:hover": {
        "&::-webkit-scrollbar": {
            width: "8px",
        }
    },
    "&::-webkit-scrollbar-track": {
        background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "#636565",
        borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        background: "rgb(160, 160, 160)",
    }

})
const logoStyle = {
    borderRadius: "50px",
    color: "#318EF5",
    marginBottom: "2px"
}
const SubContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    paddingLeft: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    userSelect: "none",
    height: "50px",
    transition: "background-color .15s ease-out",
    "&:hover": {
        backgroundColor: "#303031"
    }
})
const Title = styled("p")({
    marginLeft: "15px",
    color: "white",
    fontWeight: "500",
    textShadow: "0px 0px 1px white",
    fontSize: "15px"
})
const ProfileLogo = styled(FaUserAlt)({
    ...logoStyle,
    backgroundColor: "#4E4F50",
    color: "white",
    padding: "5px"
})
const FriendsLogo = styled(FaUserFriends)(logoStyle)
const NotiLogo = styled(MdOutlineWeb)(logoStyle)
const GameLogo = styled(RiGamepadFill)(logoStyle)
const AddsLogo = styled(BsFillMegaphoneFill)(logoStyle)
const GroupLogo = styled(MdGroups)(logoStyle)
const ShowMoreLogo = styled(BiChevronDown)({
    ...logoStyle,
    color: "white",
    width: "36px",
    backgroundColor: "#444546",
    paddingTop: "5px",
    paddingBottom: "5px",
})
const ShowLessLogo = styled(BiChevronUp)({
    ...logoStyle,
    color: "white",
    width: "36px",
    backgroundColor: "#444546",
    paddingTop: "5px",
    paddingBottom: "5px",
})

export default function MenuOptions() {
    const [extraMenu, setExtraMenu] = useState(false);

    const createLogo = (logo) => {
        const Logo = styled(logo)(logoStyle)
        return Logo;
    }
    return (
        <Container>
            <SubContainer>
                <ProfileLogo size={25} />
                <Title>Edgardo Ibar Funes Ortiz</Title>
            </SubContainer>
            <SubContainer>
                <FriendsLogo size={36} />
                <Title>Amigos</Title>
            </SubContainer>
            <SubContainer>
                <NotiLogo size={36} />
                <Title>Más recientes</Title>
            </SubContainer>
            <SubContainer>
                <GameLogo size={36} />
                <Title>Jugar</Title>
            </SubContainer>
            <SubContainer>
                <AddsLogo size={36} />
                <Title>Centro de anuncios</Title>
            </SubContainer>
            <SubContainer>
                <GroupLogo size={36} />
                <Title>Grupos</Title>
            </SubContainer>
            {extraMenu ?
                <>
                    <SubContainer>
                        {createLogo(data[0].icon)}
                        <Title>{data[0].title}</Title>
                    </SubContainer>
                </> : null}
            <SubContainer onClick={() => extraMenu ? setExtraMenu(false) : setExtraMenu(true)}>
                {!extraMenu ? <ShowMoreLogo size={25} /> : <ShowLessLogo size={25} />}
                {!extraMenu ? <Title>Ver más</Title> : <Title>Ver menos</Title>}
            </SubContainer>

        </Container>
    )
}