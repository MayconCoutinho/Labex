import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToVoltar} from '../../routes/coordinator';
import { Container, Titulo, ContainerPreto, InputTexto, CssButton } from './styled';
import { ConfirmandoToken } from "../../components/ConfirmandoToken";
import { useState } from 'react';
import { CreateTrip } from '../../hooks/Axios';
import Footer from '../../components/Footer';

const CreateTripPage = () => {

  ConfirmandoToken()
  const navigate = useNavigate()
  
  const listaPlanet = [
    'Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano' , 'Netuno'
  ]

  const planetListAll = listaPlanet.map( planet => {
    return <option>{ planet }</option>
 })

  const [formValues, setFormValues ] = useState({})


  const onChange = (event) => {

    const {name, value} = event.target
    setFormValues({...formValues, [name]:value})
    
  }


  const EnviarFormulario = (event) => {
  
    event.preventDefault()

    
    CreateTrip(formValues)

    alert("Formulario Enviado") 
}

console.log(formValues)
  

  return (<div>
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
            pattern= '[a-zA-Z ]{5,15}'
            title='name: mínimo 3 letras e menos de 15'
            value= {formValues.name || ''}
          ></input>

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
          pattern= '[a-zA-Z ]{3,15}'
          title='name: mínimo 3 letras e menos de 15'
          value= {formValues.date || ''}
        ></input>
            <input
          type={'text'}
          placeholder="Descrição"
          name='description'
          onChange={onChange}
          required
          pattern= '[a-zA-Z ]{30,100}'
          title= 'mínimo de 30 caracteres'
          value= {formValues.description || ''}
        ></input>
            <input
          type={'number'}
          placeholder="Duração em dias"
          name='durationInDays'
          onChange={onChange}
          required
          min="50"
          title='Mínimo 50 dias'
          value= {formValues.durationInDays || ''}
      
          
        ></input>

      </InputTexto>

      <CssButton>
      <button> Enviar </button>
      </CssButton>

      </form>


      </ContainerPreto>
        </Container>
      <Footer></Footer>
        </div>
  );
}


export default CreateTripPage;