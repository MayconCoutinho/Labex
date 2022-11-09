import { useNavigate } from 'react-router-dom';
import {goToHomePage , goToVoltar} from '../../routes/coordinator';
import { Token } from '../../hooks/Token';
import { Container, Titulo, ContainerPreto, ContainerScroll, ListCandidatos, CssButton } from "./styled";
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.jsx"
import { GetTripDetail, DecideCandidate} from '../../services/viagensApi';

const TripDetailsPage = () => {
  Token()
  const navigate = useNavigate()

  const { trips, token } = useContext(GlobalContext)

  const [canditados, setCanditatos] = useState([])
  const [canditadosAprovados, setCanditatosAprovados] = useState([])
  const [idViagem, setIdViagem] = useState("");

  const onChangeId = (event) => {
    const { name, value } = event.target;
    setIdViagem({ [name]: value });
  }
  useEffect(() => {
    const result = GetTripDetail( token, idViagem.id )
    result.then((response) => {
      setCanditatos(response.trip.candidates)
      setCanditatosAprovados(response.trip.approved)
    })
  },[idViagem])

  return (
      <div> 
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
                  {trips && trips.map((item) => {
                    return <option key={item.name} value={item.id}> {item.name}</option>;
                  })}
              </select>
            </CssButton>
            <ContainerScroll>
              <h4> Aprovar</h4>
              {
                canditados && canditados.map((item) => { return <ListCandidatos><h1> {item.name} <button onClick={() => DecideCandidate(item.id, idViagem.id, token)}> Aprove </button></h1></ListCandidatos>})
              }
            </ContainerScroll>
            <ContainerScroll>
              <h4> Aprovados </h4>
              {
                canditadosAprovados && canditadosAprovados.map((item) => { return <ListCandidatos><h1> {item.name}</h1></ListCandidatos>})
              }
            </ContainerScroll>
          </ContainerPreto>
        </Container>
        <Footer/>
        </div>
  )
}
export default TripDetailsPage;