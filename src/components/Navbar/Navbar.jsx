import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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


const Link = styled(NavLink)({
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    width: "110px",
    "&:hover::before": {
        content: "algo",
        backgroundColor: "#C8C8C8",
        position: "fixed"
    }
})
const Container = styled("div")({
    backgroundColor: "#242526",
    height: "55px",
    borderBottom: "1px solid #696869",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
})
const Header = styled("div")({
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
    color: "white",
    "&::placeholder": {
        color: "#9EA0A2",
    },
    "&:focus": {
        outline: "none"
    }
})
const Sections = styled("div")({
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
})
const Menu = styled("div")({

})

export default function Navbar() {
    return (
        <Container>
            <Header>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="fb" />
                <Search type="text" name="search" id="search" placeholder="Buscar en Facebook" />
            </Header>
            <Sections>
                <Link to="/">
                    {({ isActive }) => (
                        isActive ? <HomeIcon size={30} /> : <HomeOut size={30} />
                    )}
                </Link>
                <Link to="/friends">
                    {({ isActive }) => (
                        isActive ? <FriendsIcon size={30} /> : <FriendsOut size={30} />
                    )}
                </Link>
                <Link to="/watch">
                    {({ isActive }) => (
                        isActive ? <WatchIcon size={30} /> : <WatchOut size={30} />
                    )}
                </Link>
                <Link to="/market">
                    {({ isActive }) => (
                        isActive ? <MarketIcon size={30} /> : <MarketOut size={30} />
                    )}
                </Link>
                <Link to="/game">
                    {({ isActive }) => (
                        isActive ? <GameIcon size={30} /> : <GameOut size={30} />
                    )}
                </Link>
            </Sections>
            <Menu>
                
            </Menu>
        </Container>
    )
}