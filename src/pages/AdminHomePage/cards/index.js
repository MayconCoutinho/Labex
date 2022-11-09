import React from 'react';
import {CardListViagens} from '../styled';
import { goToCreateTripPage} from '../../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import ImgLixo from '../../../assets/AdminHomePage/lixo.png'
import { useContext } from 'react'
import {GlobalContext} from "../../../global/context/useContext.jsx"
import { DeleteTrip } from '../../../services/viagensApi';

export const CardsViagem = () => {
  const navigate = useNavigate()
  const { trips, token, setUpdate, update } = useContext(GlobalContext)

  const Delete = (item,token) => {
    const response = DeleteTrip(item,token)
    response.then((response) => {
      if(response){
        setUpdate(update + 1)
        alert("Excluido com sucesso")
      }
    })
  }
  return(
      <CardListViagens>    
          <h2> Criar viagem  <button onClick={() => goToCreateTripPage(navigate)}> + </button></h2>
          {trips.map((item) => { 
            return <h1 key={item.name}> {item.name} <button onClick={() => Delete(item.id,token)}><img src={ImgLixo}></img></button></h1>
          })}
      </CardListViagens>
  )
}