import React from "react";
import styled from "styled-components"
import { BsFillPlusCircleFill } from "react-icons/bs"

const Logo = styled("img")({
    width: "200px",
    marginBottom: "-31px",
    marginLeft: "-20px",
    '@media(max-width: 1000px)': {
        marginLeft: "0px"
    },
})
const Title = styled("p")({
    fontSize: "30px",
    marginBottom: "-14px",
    fontWeight: 100,
    color: "#201D1C",
    '@media(max-width: 1000px)': {
        textAlign: "center",
    }
})

const SubTitle = styled("p")({
    color: "#5F5F5F"
})
const AddAccount = styled("div")({
    marginTop: "26px",
    backgroundColor: "#F5F6F7",
    height: "206px",
    border: "1px solid #DCDCDC",
    borderRadius: "10px",
    width: "160px",
    boxShadow: "0px 0px 20px #F5F6F7",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    transition: "all .5s",
    cursor: "pointer",
    "&:hover": {
        boxShadow: "0px 0px 10px #CBCCCC"
    }
})
const Name = styled("p")({
    color: "#1976F2",
    fontSize: "20px",
    width: "100%",
    textAlign: "center",
    top: "0px",
    backgroundColor: "white",
    height: "38px",
    borderRadius: "0px 0px 10px 10px",
    paddingTop: "9px",
})
const Add = styled(BsFillPlusCircleFill)({
    color: "#1976F2",
    height: "123px",
    backgroundColor: "#F5F6F7",
    borderRadius: "10px",
    marginTop: "16px",
})
const Accounts = styled("div")({
    userSelect: "none",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "340px",
    '@media(max-width: 1000px)': {
        justifyContent: "space-around",
    }
})
const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    '@media(max-width: 1000px)': {
        width: "100%",
        maxWidth: "500px"
    }
})
const SubContainer = styled("div")({
    width: "350px",
    '@media(max-width: 1000px)': {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    }
})
const SubCont2 = styled("div")({
    '@media(max-width: 1000px)': {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
})


export default function Sesion() {
    return (
        <Container>
            <SubCont2>
                <SubContainer>
                    <Logo src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
                    <Title>Inicios de sesión recientes</Title>
                    <SubTitle>Haz clic en tu foto o agrega una cuenta</SubTitle>
                </SubContainer>
                <Accounts>
                    <AddAccount>
                        <Add size={42} />
                        <Name>Agregar cuenta</Name>
                    </AddAccount>
                    <AddAccount>
                        <Add size={42} />
                        <Name>Agregar cuenta</Name>
                    </AddAccount>
                    <AddAccount>
                        <Add size={42} />
                        <Name>Agregar cuenta</Name>
                    </AddAccount>
                    
                </Accounts>
            </SubCont2>
        </Container>
    )
}