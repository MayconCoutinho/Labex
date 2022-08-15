import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToTripDetailsPage} from '../../routes/coordinator';
import {Container, Titulo, ContainerPreto, ContainerDetalhes, CardCriarViagem, CssButton} from './styled';
import { ConfirmandoToken } from "../../components/ConfirmandoToken";
import { CardsViagem } from './cards/index.js';
import Footer from '../../components/Footer';
const AdminHomePage = () => {

  ConfirmandoToken()
  
  const navigate = useNavigate()
  
  const SairDaConta = () => {
   window.localStorage.removeItem('token')

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
            <button onClick={() => {SairDaConta()} }> Sair da conta </button>
            <button onClick={() => {goToTripDetailsPage(navigate)} }> Aprovar Candidatos </button>
            </CssButton>
            <ContainerDetalhes>
              <CardsViagem></CardsViagem>
            </ContainerDetalhes>
          </ContainerPreto>
        </Container>
          <Footer></Footer>
        </div>
  );
}


export default AdminHomePage;