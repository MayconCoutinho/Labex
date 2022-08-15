import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage , goToLoginPage} from '../../routes/coordinator.jsx';
import {Container, Retangulo,Titulo, Button} from './styled';
import Controle from '../../assets/controle.png'
import Portal from '../../assets/portal.png'
import Footer from '../../components/Footer/index.js';
import './titulo.css'
const HomePage = () => {
  
  const navigate = useNavigate()

  return (<div>
        <Container> 
          <Retangulo>
            <Titulo>
            <h4 >  VIAGENS ESPACIAIS </h4>
            </Titulo>
            <Button>
            <button onClick={() => goToListTripsPage(navigate)}><img src={Portal} width={30}></img> Ver Viagens </button>
            </Button>
            <Button>
            <button onClick={() => goToLoginPage(navigate)}><img src={Controle} width={45} ></img> Área admin </button>
            </Button>
          </Retangulo>
         
        </Container>
         <Footer></Footer>
         </div>
        
  );
}


export default HomePage;