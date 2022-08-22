import axios from "axios";
import { useEffect, useState } from "react";
import { goToEntra } from "../routes/coordinator";


// funcionando lista de viagens disponiveis
export const GetTrips = () => {
  
  const [getTripsList, setGetTripsList]  = useState([])

  useEffect(() => {

    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips"
    )
    .then((response) => {
      setGetTripsList(response.data.trips)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

    return getTripsList
    
};

export const GetTripsCompleto = () => {
  
  const [getTripsCompleto, setGetTripsCompleto]  = useState([])

  useEffect(() => {

    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips"
    )
    .then((response) => {
      setGetTripsCompleto(response.data.trips)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

    return getTripsCompleto
    
};

export const ApplytoTrip = (body, id) => {

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${id}/apply`,body
      )
      .then((response) => {
      })
      .catch((err) => {
        console.log(err);
      });

};

// funcionando
export const CreateTrip = (body) => {

  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips",
      body,{
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }

      )

    .then((response) => {
    })
    .catch((err) => {
      console.log(err);
    });
};


// Funcionando


export const DeleteTrip = (id) => {
  // o body vai entra com formulario

  const token = window.localStorage.getItem("token")

  axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${id}`,
      {
        headers: {
          auth: token
        }
      }
    )
    .then((response) => {
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Login = (email, password, navigate) => {

  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/login",
      {
        email: email,
        password: password,
      }
    )
    .then((response) => {
      window.localStorage.setItem("token", response.data.token)
      goToEntra(navigate)

    })
    .catch((err) => {
      alert("senha errada")
      console.log(err);
    });
};

export const DecideCandidate = (tripId,candidateId, boolean) => {

  const body = {
      approve: boolean
  }

  axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${tripId}/candidates/${candidateId}/decide`,body,{
      headers: window.localStorage.getItem("token")
      })
    .then((response) => {
      alert('aprovado')
    
    })
    .catch((err) => {
      console.log(err);
    });
};
