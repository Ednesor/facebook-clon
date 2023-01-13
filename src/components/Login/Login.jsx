import React from "react";
import styled from "styled-components";

const Logo = styled("img")({
    width: "200px",
    marginBottom: "-31px",
    marginLeft: "-20px"
})
const Title = styled("p")({
    fontSize: "25px",
    marginBottom: "-14px"
})
const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "8px",
})
const SubTitle = styled("p")({
    color: "#5F5F5F"
})
const Sesion = styled("div")({

})
const  AddAccount = styled("div")({
    marginTop: "26px",
    backgroundColor: "#F5F6F7",
    height: "206px",
    border: "1px solid #DCDCDC",
    borderRadius: "10px",
    width: "160px",
    boxShadow: "0px 0px 20px #F5F6F7",
    transition: "all .25s",
    "&:hover":{
        boxShadow: "0px 0px 20px #CBCCCC"
    }
})
const Name = styled("p")({
    color: "#1976F2",
    fontSize: "20px",
    width: "100%",
    textAlign: "center",
    top: "0px",
})
const Add = styled("div")({

})

export default function Login() {
    return (
        <Container>
            <Sesion>
                <div>
                    <Logo src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
                    <Title>Inicios de sesión recientes</Title>
                    <SubTitle>Haz clic en tu foto o agrega una cuenta</SubTitle>
                </div>
                <div>
                    <AddAccount>
                        <Add>Boton</Add>
                        <Name>Agregar cuenta</Name>
                    </AddAccount>
                </div>
            </Sesion>
            <div className="loginForm">

            </div>
            <div className="footer">

            </div>
        </Container>
    )
}