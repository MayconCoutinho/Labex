import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToHomePage, goToVoltar } from "../../routes/coordinator";
import Footer from "../../components/Footer";
import erro from "../../assets/ErrorPage/erro.png";

const DivErro = styled.div`
  text-align: center;
  .div-img-tela {
    background-image: url(${erro});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: auto;
    height: 100vh;
  }
  button{
    padding: 13px;
    border-radius: 50px;
    background-color: #FFDE59;
    border: none;
    margin-top: 700px;
    margin-left: 20px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media(max-width: 991px) {
      margin-top: 600px;
    }
    :hover{
      background-color: #dfb202;
    }
  }
`
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <DivErro>
        <div className="div-img-tela">
          <button onClick={() => goToHomePage(navigate)}> HomePage </button>
          <button onClick={() => goToVoltar(navigate)}> voltar </button>
        </div>
      </DivErro>
      <Footer></Footer>
    </div>
  );
}
export default ErrorPage;