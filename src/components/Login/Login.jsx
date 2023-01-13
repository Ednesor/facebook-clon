import React from "react";
import styled from "styled-components";

const Logo = styled("img")({
    width: "200px",
    marginBottom: "-35px"
})
const Title = styled("p")({
    fontSize: "25px",
})
const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "8px",
})
const Profiles = styled("div")({

})

export default function Login() {
    return (
        <Container>
            <Profiles>
                <div>
                    <Logo src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
                    <Title>Inicios de sesión recientes</Title>
                    <p>Haz clic en tu foto o agrega una cuenta</p>
                </div>
                <div>
                    <div>Perfil</div>
                </div>
            </Profiles>
            <div className="loginForm">

            </div>
            <div className="footer">

            </div>
        </Container>
    )
}