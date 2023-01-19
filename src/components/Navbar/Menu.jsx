import React from "react";
import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg"
import { FaFacebookMessenger } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { FaUser } from "react-icons/fa"

const iconStyle = {
    color: "white",
}
const MenuIcon = styled(CgMenuGridO)(iconStyle)
const MsgIcon = styled(FaFacebookMessenger)(iconStyle)
const AlertIcon = styled(IoMdNotifications)(iconStyle)
const UserIcon = styled(FaUser)(iconStyle)

const Container = styled("div")({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "190px",
    marginRight: "20px",
})
const Button = styled("div")({
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    backgroundColor: "#404040",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color .15s",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#4E4F50"
    },
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
        marginLeft: "-0px",
    }
})

export default function Menu() {
    return (
        <Container>
            <Button id="Menú">
                <MenuIcon size={30} />
            </Button>
            <Button id="Messenger">
                <MsgIcon size={17} />
            </Button>
            <Button id="Notificaciones">
                <AlertIcon size={20} />
            </Button>
            <Button id="Cuenta">
                <UserIcon size={20} />
            </Button>
        </Container>
    )
}