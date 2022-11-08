import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,ContainerPreto,Titulo,ContaineTrips, CardTrips, CssButton} from './styled'
import {goToHomePage, goToApplicationFormPage} from '../../routes/coordinator';
import Footer from '../../components/Footer';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.jsx"

const ListTripsPage = () => {
  const navigate = useNavigate()
  const { trips } = useContext(GlobalContext)

  return (<div>
        <Container> 
          <ContainerPreto>

            <Titulo>
            <h4> LISTA DE VIAGENS DISPONIVEIS </h4>
            </Titulo>
            <CssButton>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            </CssButton>

            <ContaineTrips>
            {
              trips && trips.map((item) => {
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