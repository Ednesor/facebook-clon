import React from "react";
import styled from "styled-components";

const Container = styled("div")({
    width: "400px",
    height: "335px",
    '@media(max-width: 1000px)': {
        width: "350px"
    }
})
const Form = styled("div")({
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px #CACCCB",
    marginTop: "50px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "15px",
})
const Field = styled("input")({
    width: "83%",
    height: "50px",
    borderRadius: "7px",
    border: "1px solid #DCDDE0",
    fontSize: "17px",
    marginBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    "&:focus": {
        outline: "none",
        borderColor: "#166FE5",
        boxShadow: "0px 0px 3px #AED5FF",
        backgroundColor: "#E8F0FE",
    }
})
const LoginButton = styled("button")({
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#1976F2",
    width: "91%",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    height: "50px",
    cursor: "pointer",
    marginTop: "5px",
    transition: "background-color .15s",
    "&:hover": {
        backgroundColor: "#166FE5"
    }
})
const CreateButton = styled(LoginButton)({
    backgroundColor: "#42b72a",
    transition: "background-color .25s",
    width: "50%",
    fontSize: "17px",
    marginBottom: "17px",
    marginTop: "10px",
    "&:hover": {
        backgroundColor: "#36A420"
    }
})
const Hint = styled("p")({
    width: "100%",
    textAlign: "center",
    color: "#1976F2",
    fontSize: "15px",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline"
    }
})
const Line = styled("hr")({
    width: "90%",
    border: "none",
    borderTop: "1px solid #DCDDE0",
})
const Text = styled("p")({
    width: "85%",
    textAlign: "center",
    fontSize: "15px",
    marginLeft: "30px",
    marginTop: "25px"
})
const SelectText = styled("span")({
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    }
})

export default function LoginForm() {
    return (
        <Container>
            <Form>
                <Field type="text" name="email" id="email" placeholder="Correo electrónico o número de teléfono" />
                <Field type="password" name="password" id="password" placeholder="Contraseña" />
                <LoginButton>Iniciar sesión</LoginButton>
                <Hint>¿Olvidaste tu contraseña?</Hint>
                <Line />
                <CreateButton>Crear cuenta nueva</CreateButton>
            </Form>
            <Text><SelectText>Crea una página</SelectText> para una celebridad, una marca o un negocio</Text>
        </Container>
    )
}