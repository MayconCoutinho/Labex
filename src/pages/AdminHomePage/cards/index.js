import React from 'react';
import { GetTrips } from '../../../hooks/Axios';
import {CardListViagens} from '../styled';
import {DeleteTrip} from '../../../hooks/Axios'
import { goToCreateTripPage} from '../../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import ImgLixo from '../../../assets/lixo.png'


export const CardsViagem = () => {

  const navigate = useNavigate()

  const token = window.localStorage.getItem('token')

  const GetTripsLista = GetTrips()

  return (

      <CardListViagens>    
          <h2> Criar viagem  <button onClick={() => goToCreateTripPage(navigate)}> + </button></h2>

       {GetTripsLista.map( item => { return <h1 key={item.name}> {item.name} <button onClick={() => DeleteTrip(item.id,token)}><img src={ImgLixo}></img> </button></h1>  
       })}
      </CardListViagens>
  );
}





