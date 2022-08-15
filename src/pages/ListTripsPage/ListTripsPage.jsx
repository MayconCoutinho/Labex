import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,ContainerPreto,Titulo,ContaineTrips, CardTrips, CssButton} from './styled'
import {goToHomePage, goToVoltar, goToApplicationFormPage} from '../../routes/coordinator';
import {GetTripsCompleto} from '../../hooks/Axios'
import Footer from '../../components/Footer';
const ListTripsPage = () => {

  const navigate = useNavigate()
  
  const viagem = GetTripsCompleto()

  console.log(viagem)
  

  return (<div>
        <Container> 
          <ContainerPreto>

            <Titulo>
            <h4> LISTA DE VIAGENS DISPONIVEIS </h4>
            </Titulo>
            <CssButton>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            </CssButton>

            <ContaineTrips>
            {
              viagem.map((item) => {
                return <CardTrips onClick={() => goToApplicationFormPage(navigate)}>
                  <p>
                  Nome: {item.name}
                  </p><p>    
                  Descrição: {item.description}
                  </p><p>  
                  Planeta: {item.planet}  
                  </p><p>    
                  Duração em dias: {item.durationInDays}
                  </p><p>    
                  Data: {item.date}
                  </p> 
                  <h1> Click Pare Se Increver</h1>
   
                  </CardTrips>
                  
              })
            }
            </ContaineTrips>
  
          </ContainerPreto>
        </Container>
            <Footer></Footer>
        </div>
  );
}


export default ListTripsPage;