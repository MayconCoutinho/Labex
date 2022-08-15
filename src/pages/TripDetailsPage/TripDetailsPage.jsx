import { useNavigate } from 'react-router-dom';
import {goToHomePage , goToVoltar} from '../../routes/coordinator';
import { GetTripsCompleto, DecideCandidate} from '../../hooks/Axios'
import { ConfirmandoToken } from "../../components/ConfirmandoToken";
import { Container, Titulo, ContainerPreto, ContainerScroll, ListCandidatos, CssButton } from "./styled";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer';

const TripDetailsPage = () => {

  ConfirmandoToken()

  const token = window.localStorage.getItem('token')

  const [canditados, setCanditatos] = useState([])
  const [canditadosAprovados, setCanditatosAprovados] = useState([])

  const GetTripDetail = (token, id) => {

    // console.log('O id esta chegando em ChamarGetTripDetail', id)
      axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setCanditatos(response.data.trip.candidates)
        setCanditatosAprovados(response.data.trip.approved)
      })
      .catch((err) => {

        console.log(err)
      });
      
  };

  const tripsList = GetTripsCompleto()

  const [idViagem, setIdViagem] = useState("");

  const onChangeId = (event) => {
    const { name, value } = event.target;
    setIdViagem({ [name]: value });
  };


  const navigate = useNavigate()



  useEffect(() => {GetTripDetail( token, idViagem.id )},[idViagem])

  
  

  // console.log("canditados", canditados)
  // console.log("canditados Aprovados", canditadosAprovados)

  const Aprovar = (id) => {
    console.log(id)
    DecideCandidate(idViagem.id, id)
  }
  
  return (<div> 
        <Container> 
          <ContainerPreto>
          <div className='div-img-tela'>

            <Titulo>
            <h4> CONTROLE DE CANDIDATOS </h4>
            </Titulo>

            <CssButton>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            </CssButton>
          </div>

          <CssButton>

          <select
              name="id"
              onChange={onChangeId}
              value={idViagem.id || ""}
            >
              <option> Escolha uma Viagem </option>
              {tripsList.map((item) => {
                return <option key={item.name} value={item.id}> {item.name}</option>;
              })}
            </select>
            </CssButton>

            <ContainerScroll>
            <h4> Aprovar</h4>
            {
              canditados.map((item) => { return <ListCandidatos><h1> {item.name} <button onClick={() => DecideCandidate(idViagem.id, item.id, true)}> Aprove </button></h1></ListCandidatos>})
            }
            </ContainerScroll>

            <ContainerScroll>
            <h4> Aprovados </h4>
            {
              canditadosAprovados.map((item) => { return <ListCandidatos><h1> {item.name}</h1></ListCandidatos>})
            }

            </ContainerScroll>


            </ContainerPreto>
        </Container>
        <Footer></Footer>
        </div>
  );
}


export default TripDetailsPage;