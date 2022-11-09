import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL.jsx";

export const GetTrips = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trips`)
    return response.data
  } catch(error){
    console.log(error.response)
  } 
}
export const ApplytoTrip = async (body, id) => {
  try {
    const response = await axios.post(`${BASE_URL}trips/${id}/apply`,body)
    return response.data
  } catch(error){
    console.log(error.response)
  } 
}
export const Login = async (email, password) => {
  try {
    const body = {
      email: email,
      password: password,
    }
    const response = await axios.post(`${BASE_URL}login`,body)
    return response.data
  } catch(error){
    alert(error.response.data.message)
  } 
}
export const CreateTrip = async (body, token) => {
  try {
      await axios.post(`${BASE_URL}trips`,body,{
      headers: {
        auth: token
      }
    })
    return true
  } catch(error){
    console.log(error.response)
    return false
  } 
}
export const GetTripDetail = async (token, id) => {
  try {
    const response = await axios.get(`${BASE_URL}trip/${id}`,{
      headers: {
        auth: token,
      },
    })
    return response.data
  } catch(error){
    console.log(error.response)
  } 
}
export const DecideCandidate = async (tripId, candidateId, token) => {
  try {
    const body = {
      approve: true
    }
    const response = await axios.put(`${BASE_URL}trips/${tripId}/candidates/${candidateId}/decide`,body,{
      headers: {auth: token}
    })
    return response.data
  } catch(error){
    console.log(error.response)
  } 
}
export const DeleteTrip = async (id, token) => {
  try{
      await axios.delete(`${BASE_URL}trips/${id}`,{
      headers: {
        auth: token,
      },
    })
    return true
  } catch(error){
    console.log(error.response)
    return false
  } 
}