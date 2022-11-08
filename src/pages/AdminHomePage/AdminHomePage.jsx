import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToTripDetailsPage } from '../../routes/coordinator';
import { Container, Titulo, ContainerPreto, ContainerDetalhes, CssButton} from './styled';
import { CardsViagem } from './cards/index.js';
import Footer from '../../components/Footer';
import { Token } from '../../hooks/Token';
import {GlobalContext} from "../../global/context/useContext.jsx"
import { useContext } from "react";

const AdminHomePage = () => {
  Token()
  const { setToken } = useContext(GlobalContext)

  const navigate = useNavigate()
  const SairDaConta = () => {
    setToken(null)
    goToHomePage(navigate)
  }
  return (
      <div>
          <Container> 
            <ContainerPreto>         
              <Titulo>
                <h4>  PAINEL ADMINISTRATIVO </h4>
              </Titulo>
              <CssButton>
                <button onClick={() => goToHomePage(navigate)}> HomePage </button>
                <button onClick={() => {SairDaConta()}}> Sair da conta </button>
                <button onClick={() => {goToTripDetailsPage(navigate)}}> Aprovar Candidatos </button>
              </CssButton>
              <ContainerDetalhes>
                <CardsViagem/>
              </ContainerDetalhes>
            </ContainerPreto>
          </Container>
          <Footer/>
      </div>
  )
}
export default AdminHomePage;