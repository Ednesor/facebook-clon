import React from "react";
import styled from "styled-components";

const Container = styled("div")({
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    // height: "200px",
    translate: "0% 65%"
})
const Languajes = styled("div")({
    width: "71.5%",
    display: "flex",
    justifyContent: "left",
    alignItems: "end",
    flexWrap: "wrap",
    marginTop: "25px",
    marginBottom: "3px",
})
const LangItem = styled("span")({
    color: "#717172",
    fontSize: "12px",
    marginRight: "10px",
    fontWeight: "500",
    fontFamily: "Helvetica, Arial, sans-serif",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline"
    }
})
const PlusIcon = styled("span")({

})
const Line = styled("hr")({
    width: "71.5%",
    height: "0px",
    border: "0px solid white",
    borderTop: "1px solid #C9C7C9"
})
const Options = styled("div")({

})
const OpItem = styled("span")({

})

export default function Footer(){
    return(
        <Container>
            <Languajes>
                <LangItem>Español</LangItem>
                <LangItem>English (US)</LangItem>
                <LangItem>Português (Brasil)</LangItem>
                <LangItem>Français (France)</LangItem>
                <LangItem>Italiano</LangItem>
                <LangItem>Deutsch</LangItem>
                <LangItem>العربية</LangItem>
                <LangItem>中文(简体)</LangItem>
                <LangItem>हिन्दी</LangItem>
                <LangItem>日本語</LangItem>
                <PlusIcon>+</PlusIcon>
            </Languajes>
            <Line />
            <Options>
                <OpItem>Registrarte</OpItem>
                <OpItem>Iniciar sesión</OpItem>
                <OpItem> Messenger</OpItem>
                <OpItem>Facebook Lite</OpItem>
                <OpItem>Watch</OpItem>
                <OpItem>Lugares</OpItem>
                <OpItem>Juegos</OpItem>
                <OpItem>Marketplace</OpItem>
                <OpItem>Meta Pay</OpItem>
                <OpItem>Oculus</OpItem>
                <OpItem>Portal</OpItem>
                <OpItem>Instagram</OpItem>
                <OpItem>Bulletin</OpItem>
                <OpItem>Recaudación de fondos</OpItem>
                <OpItem>Servicios</OpItem>
                <OpItem>Centro de información de votación</OpItem>
                <OpItem>Política de privacidad</OpItem>
                <OpItem>Centro de privacidad</OpItem>
                <OpItem>Grupos</OpItem>
                <OpItem>Información</OpItem>
                <OpItem>Crear anuncio</OpItem>
                <OpItem>Crear página</OpItem>
                <OpItem>Desarrolladores</OpItem>
                <OpItem>Empleo</OpItem>
                <OpItem>Cookies</OpItem>
                <OpItem>Opciones de anuncios</OpItem>
                <OpItem>Condiciones</OpItem>
                <OpItem>Ayuda</OpItem>
                <OpItem>Subir contactos y no usuarios</OpItem>
            </Options>
        </Container>
    )
}