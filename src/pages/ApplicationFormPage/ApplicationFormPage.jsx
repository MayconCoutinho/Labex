import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToVoltar} from "../../routes/coordinator";
import { Container, Titulo, ContainerPreto, InputTexto, CssButton } from "./styled";
import { useForm } from "../../hooks/useForm";
import Footer from "../../components/Footer";
import { ApplytoTrip } from "../../services/viagensApi";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.jsx"

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const { trips } = useContext(GlobalContext)

  const country = require("../../json/paises-gentilicos-google-maps.json");

  const countryListAll = country.map((item) => {
    return <option key={item.nome_pais} > {item.nome_pais} </option>;
  });


  const {formValues, onChange, cleanFields} = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""})

  const [idViagem, setIdViagem] = useState({id: ""});

  const onChangeId = (event) => {
    const {name, value} = event.target
    setIdViagem({ ...idViagem ,[name]: value });
  };

  const EnviarFormulario = (event) => {
    event.preventDefault();

    ApplytoTrip(formValues, idViagem.id);
    cleanFields()
    alert("Formulario Enviado");
  };

  return (
      <div>
        <Container>
          <ContainerPreto>
            <Titulo>
              <h4>INSCREVA-SE PARA UMA VIAGEM</h4>
            </Titulo>
            <CssButton>
              <button onClick={() => goToHomePage(navigate)}> HomePage </button>
              <button onClick={() => goToVoltar(navigate)}> voltar </button>
            </CssButton>
            <form onSubmit={EnviarFormulario}>
              <InputTexto>
                <select
                  name="id"
                  onChange={onChangeId}
                  value={idViagem.id}
                >
                  <option>Escolha uma viagem </option>
                  {trips && trips.map((item) => {
                    return <option key={item.name} value={item.id}> {item.name}</option>;
                  })}
                </select>
                <input
                  type={"text"}
                  placeholder="Nome"
                  name="name"
                  onChange={onChange}
                  required
                  pattern={"^.{3,}$"}
                  title="name: mínimo 3 letras e menos de 15"
                  value={formValues.name }
                />
                <input
                  type={"number"}
                  placeholder="Idade"
                  name="age"
                  onChange={onChange}
                  required
                  min="18"
                  title="Apenas maiores de 18 anos"
                  value={formValues.age}
                />
                <input
                  type={"text"}
                  placeholder="Candidatura"
                  name="applicationText"
                  onChange={onChange}
                  required
                  pattern="[a-zA-Z ]{30,100}"
                  title="mínimo de 30 caracteres"
                  value={formValues.applicationText}
                />
                <input
                  type={"text"}
                  placeholder="Profissão"
                  name="profession"
                  onChange={onChange}
                  required
                  pattern="[a-zA-Z ]{10,30}"
                  title="mínimo de 10 caracteres"
                  value={formValues.profession}
                />
                <select
                  name="country"
                  onChange={onChange}
                  value={formValues.country}
                >
                  <option>Escolha um País </option>
                  {countryListAll}
                </select>
              </InputTexto>
              <CssButton>
                <button> Enviar </button>
              </CssButton> 
            </form>
          </ContainerPreto>
        </Container>
        <Footer></Footer>
      </div>
  )
}
export default ApplicationFormPage;
