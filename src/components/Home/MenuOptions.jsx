import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { RiGamepadFill } from "react-icons/ri";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { BiGame } from "react-icons/bi";

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
    color: "#D3D1D0",
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
const ExtraLogo = styled(BsFillStarFill)(logoStyle)
const ADLogo = styled(BiGame)(logoStyle)
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
const Line = styled("hr")({
    border: "none",
    borderTop: "1px solid #404040",
    width: "90%"
})
const ADTitle = styled("p")({
    color: "#B0B3B8",
    marginLeft: "15px",
    fontSize: "17px",
    fontWeight: "500",
    fontFamily: "inherit"
})
const BottomContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "90%",
    // backgroundColor: "red",
    marginLeft: "15px",
    marginTop: "15px",
})
const Marca = styled("span")({
    margin: "0px",
    color: "#B0B3B8",
    fontSize: "13px",
    marginRight: "5px"
})
const BottomOption = styled(Marca)({
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline"
    }
})
const Separator = styled("span")({
    width: "2px",
    height: "2px",
    backgroundColor: "#B0B3B8",
    marginRight: "5px",
})
const Image = styled("i")({
    width: "36px",
    height: "36px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    background: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png)"
});

export default function MenuOptions() {
    const [extraMenu, setExtraMenu] = useState(false);
    const [extraAD, setExtraAD] = useState(false);

    const createSection = (rep, AD) => {
        let array = [];
        for (let i = 0; i < rep; i++) {
            array.push(
                <SubContainer key={i}>
                    {!AD ? <ExtraLogo size={36} /> : <ADLogo size={36} />}
                    {!AD ? <Title>Opción extra</Title> : <Title>Acceso directo</Title>}
                </SubContainer>
            )
        }
        console.log(array)
        return array;
    }
    return (
        <Container>
            <SubContainer>
                <ProfileLogo size={25} />
                <Title>Edgardo Ibar Funes Ortiz</Title>
            </SubContainer>
            <SubContainer>
                {/* <FriendsLogo size={36} /> */}
                <Image style={{ backgroundPosition: "0 -296px" }} />
                <Title>Amigos</Title>
            </SubContainer>
            <SubContainer>
                <img alt="recientes" src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" />
                <Title>Más recientes</Title>
            </SubContainer>
            <SubContainer>
                <Image style={{ backgroundPosition: "0 -74px" }} />
                <Title>Grupos</Title>
            </SubContainer>
            <SubContainer>
                <Image style={{ backgroundPosition: "0 -407px" }} />
                <Title>Marketplace</Title>
            </SubContainer>
            <SubContainer>
                <Image style={{ backgroundPosition: "0 -518px" }} />
                <Title>Watch</Title>
            </SubContainer>
            {extraMenu ? <>
                <SubContainer>
                    <img style={{width: "36px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/cbPxeioybsd.png" alt="publicidad" />
                    <Title>Actividad publicitaria reciente</Title>
                </SubContainer>
                <SubContainer>
                    <img style={{width: "36px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png" alt="anuncios" />
                    <Title>Administrador de anuncios</Title>
                </SubContainer>
                <SubContainer>
                    <img style={{width: "36px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/4LP02rGQaMl.png" alt="clima" />
                    <Title>Clima: Centro de información</Title>
                </SubContainer>
                <SubContainer>
                    <img style={{width: "36px"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png" alt="favoritos" />
                    <Title>Favoritos</Title>
                </SubContainer>
                <SubContainer>
                    <Image style={{ backgroundPosition: "0px -185px" }} />
                    <Title>Guardado</Title>
                </SubContainer>
                <SubContainer>
                    <Image style={{ backgroundPosition: "0px -111px" }} />
                    <Title>Páginas</Title>
                </SubContainer>
            </> : null}
            <SubContainer onClick={() => extraMenu ? setExtraMenu(false) : setExtraMenu(true)}>
                {!extraMenu ? <ShowMoreLogo size={25} /> : <ShowLessLogo size={25} />}
                {!extraMenu ? <Title>Ver más</Title> : <Title>Ver menos</Title>}
            </SubContainer>
            <Line />
            <ADTitle>Tus accesos directos</ADTitle>
            {createSection(5, true)}
            {extraAD ? createSection(15, true) : null}
            <SubContainer onClick={() => extraAD ? setExtraAD(false) : setExtraAD(true)}>
                {!extraAD ? <ShowMoreLogo size={25} /> : <ShowLessLogo size={25} />}
                {!extraAD ? <Title>Ver más</Title> : <Title>Ver menos</Title>}
            </SubContainer>
            <BottomContainer>
                <BottomOption>Privacidad</BottomOption>
                <Separator />
                <BottomOption>Condiciones</BottomOption>
                <Separator />
                <BottomOption>Publicidad</BottomOption>
                <Separator />
                <BottomOption>Opciones de anuncios</BottomOption>
                <Separator />
                <BottomOption>Cookies</BottomOption>
                <Separator />
                <BottomOption>Más</BottomOption>
                <Separator />
                <BottomOption>Ednesor © 2023</BottomOption>
            </BottomContainer>
        </Container>
    )
}