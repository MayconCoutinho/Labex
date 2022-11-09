import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToVoltar} from '../../routes/coordinator';
import { Container, Titulo, ContainerPreto, InputTexto, CssButton } from './styled';
import { Token } from '../../hooks/Token';
import { useState } from 'react';
import Footer from '../../components/Footer';
import { CreateTrip } from '../../services/viagensApi';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.jsx"

const CreateTripPage = () => {
  Token()
  const navigate = useNavigate()
  const { token, setUpdate, update } = useContext(GlobalContext)
  const listaPlanet = [
    'Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano' , 'Netuno'
  ]
  const planetListAll = listaPlanet.map( planet => {
    return <option>{ planet }</option>
  })
  const [formValues, setFormValues ] = useState({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const onChange = (event) => {
    const {name, value} = event.target
    setFormValues({...formValues, [name]:value}) 
  }
  const EnviarFormulario = (event) => {
    event.preventDefault()
    const response = CreateTrip(formValues, token)
    response.then((response) => {
      if(response){
        setUpdate(update + 1)
        setFormValues('')
      }
    })
    alert("Formulario Enviado") 
  }
  return (
      <div>
        <Container> 
          <ContainerPreto>
            <Titulo>
              <h4> CRIAR UMA VIAGEM </h4>
            </Titulo>
            <CssButton>
              <button onClick={() => goToHomePage(navigate)}> HomePage </button>
              <button onClick={() => goToVoltar(navigate)}> voltar </button>
            </CssButton>
            <form onSubmit={EnviarFormulario}>
              <InputTexto>
                <input
                  type={'text'}
                  placeholder="Nome"
                  name='name'
                  onChange={onChange}
                  required
                  pattern={"^.{5,}$"}
                  title='name: mínimo 3 letras e menos de 15'
                  value= {formValues.name || ''}
                />
                <select name='planet' onChange={onChange} value= {formValues.planet || ''}>
                  <option>Escolha um Planeta</option>
                  {planetListAll}
                </select> 
                <input
                  type={'date'}
                  placeholder="date"
                  name='date'
                  onChange={onChange}
                  required
                  pattern={"^.{30,}$"}
                  title='Datas passadas não são validas'
                  value= {formValues.date || ''}
                />
                <input
                  type={'text'}
                  placeholder="Descrição"
                  name='description'
                  onChange={onChange}
                  required
                  pattern= '[a-zA-Z ]{30,100}'
                  title= 'mínimo de 30 caracteres'
                  value= {formValues.description || ''}
                />
                <input
                  type={'number'}
                  placeholder="Duração em dias"
                  name='durationInDays'
                  onChange={onChange}
                  required
                  min="50"
                  title='Mínimo 50 dias'
                  value= {formValues.durationInDays || ''}
                />
              </InputTexto>
            <CssButton>
              <button> Enviar </button>
            </CssButton>
          </form>
        </ContainerPreto>
        </Container>
        <Footer/>
      </div>
  )
}
export default CreateTripPage;