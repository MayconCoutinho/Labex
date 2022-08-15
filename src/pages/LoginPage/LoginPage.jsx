import React, { useState } from "react";
import { goToHomePage } from "../../routes/coordinator";
import { Container, Titulo, InputTexto, Button } from "./styled";
import { Login } from "../../hooks/Axios";
import { LoginToken } from "../../components/LoginToken";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const LoginPage = () => {

  LoginToken()

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const FazerLogin = (event) => {

    event.preventDefault()

    Login(email,password)
  }

  return ( <div> 
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
          ></input>
        </InputTexto>
        <InputTexto>
          <input
            type={"password"}
            placeholder="Senha"
            value={password}
            required
            onChange={onChangePassword}
          ></input>
        </InputTexto>

        <Button>
        <button> Entrar </button>
        <button onClick={() => goToHomePage(navigate)}> voltar </button>
        </Button>

      </form>
    </Container>
    <Footer></Footer>
    </div>
  );
};

export default LoginPage;
