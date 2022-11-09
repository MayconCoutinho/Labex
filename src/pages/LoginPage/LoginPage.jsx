import React, { useState } from "react";
import { goToHomePage, goToEntra} from "../../routes/coordinator";
import { Container, Titulo, InputTexto, Button } from "./styled";
import { Token } from '../../hooks/Token';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { Login } from "../../services/viagensApi";
import {GlobalContext} from "../../global/context/useContext.jsx"
import { useContext } from "react";
 

const LoginPage = () => {
  Token("login")  

  const navigate = useNavigate()
  
  const { setToken } = useContext(GlobalContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const FazerLogin = (event) => {
    event.preventDefault()
    const response = Login(email,password)
    response.then((response) => {
      setToken(response.token)
      goToEntra(navigate)
    })
  }
  return ( 
    <div> 
      <Container>
        <Titulo>
          <h4> LOGIN </h4>
        </Titulo>
        <form onSubmit={FazerLogin}>
          <InputTexto>
            <input
              type={"email"}
              placeholder="E-mail"
              value={email}
              onChange={onChangeEmail}
            />
          </InputTexto>
          <InputTexto>
            <input
              type={"password"}
              placeholder="Senha"
              value={password}
              required
              onChange={onChangePassword}
            />
          </InputTexto>
          <Button>
          <button> Entrar </button>
          <button onClick={() => goToHomePage(navigate)}> voltar </button>
          </Button>
        </form>
      </Container>
      <Footer/>
    </div>
  )
}
export default LoginPage;