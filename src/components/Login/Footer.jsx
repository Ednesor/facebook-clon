import React from "react";
import styled from "styled-components";
import { BiPlus } from "react-icons/bi"

const Container = styled("div")({
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    translate: "0% 65%"
})
const Languajes = styled("div")({
    width: "71.5%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "25px",
    marginBottom: "3px",
})
const LangItem = styled("span")({
    color: "#888989",
    fontSize: "12px",
    marginRight: "10px",
    fontWeight: "500",
    fontFamily: "Helvetica, Arial, sans-serif",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline"
    }
})
const PlusIcon = styled(BiPlus)({
    border: "1px solid #C9C7C9",
    borderRadius: "2px",
    backgroundColor: "#F6F5F6",
    color: "#656C7B",
    width: "30px",
    height: "19px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#EBEDF0"
    }
})
const Line = styled("hr")({
    width: "71.5%",
    height: "0px",
    border: "0px solid white",
    borderTop: "1px solid #C9C7C9"
})
const Options = styled("div")({
    width: "71.5%",
    display: "flex",
    justifyContent: "left",
    alignItems: "end",
    flexWrap: "wrap",
})
const OpItem = styled(LangItem)({
    marginRight: "20px",
    marginBottom: "5px",
    fontSize: "11.5px",
})
const Meta = styled("p")({
    width: "70.7%",
    fontSize: "11px",
    color: "#6F7474"
})

export default function Footer() {
    return (
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
                <PlusIcon size={15}>+</PlusIcon>
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
            <Meta><b>Ednesor</b> © 2023</Meta>
        </Container>
    )
}
//TODO: sustituir % por px