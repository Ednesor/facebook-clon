import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoGameControllerSharp } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const styleIconsOut = {
    color: "#B8BBBF",
    paddingBottom: "10px",
    width: "100%",
    paddingTop: "5px",
    marginBottom: "4px",
    "&:hover": {
        backgroundColor: "#3A3B3C",
        borderRadius: "10px",
    }
}
const styleIcons = {
    color: "#2694FF",
    borderBottom: "solid 3px #2694FF",
    paddingBottom: "10px",
    width: "100%",
}
const FriendsIcon = styled(BsPeopleFill)(styleIcons)
const FriendsOut = styled(BsPeople)(styleIconsOut)
const HomeIcon = styled(MdHome)(styleIcons)
const HomeOut = styled(AiOutlineHome)(styleIconsOut)
const WatchIcon = styled(BsDisplayFill)(styleIcons)
const WatchOut = styled(BsDisplay)(styleIconsOut)
const MarketIcon = styled(IoStorefrontSharp)(styleIcons)
const MarketOut = styled(IoStorefrontOutline)(styleIconsOut)
const GameIcon = styled(IoGameControllerSharp)(styleIcons)
const GameOut = styled(IoGameControllerOutline)(styleIconsOut)

const Container = styled("div")({
    height: "100%",
    width: "580px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginRight: "100px",
})
const Link = styled(NavLink)({
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "110px",
    "&:hover::after": {
        content: '""attr(id)""',
        backgroundColor: "#C8C8C8",
        borderRadius: "5px",
        color: "black",
        fontSize: "13px",
        position: "absolute",
        height: "27px",
        width: "90px",
        textAlign: "center",
        paddingTop: "7px",
        top: "57px",
        left: "70px",
        marginLeft: "-60px",
    }
})

export default function Sections() {
    return (
        <Container>
            <Link to="/" id="Inicio">
                {({ isActive }) => (
                    isActive ? <HomeIcon size={30} /> : <HomeOut size={30} />
                )}
            </Link>
            <Link to="/friends" id="Amigos">
                {({ isActive }) => (
                    isActive ? <FriendsIcon size={30} /> : <FriendsOut size={30} />
                )}
            </Link>
            <Link to="/watch" id="Watch">
                {({ isActive }) => (
                    isActive ? <WatchIcon size={30} /> : <WatchOut size={30} />
                )}
            </Link>
            <Link to="/market" id="Marketplace">
                {({ isActive }) => (
                    isActive ? <MarketIcon size={30} /> : <MarketOut size={30} />
                )}
            </Link>
            <Link to="/game" id="Videojuegos">
                {({ isActive }) => (
                    isActive ? <GameIcon size={30} /> : <GameOut size={30} />
                )}
            </Link>
        </Container>
    )
}