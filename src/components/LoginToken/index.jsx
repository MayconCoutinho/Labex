
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToEntra } from "../../routes/coordinator";


export const LoginToken = () => {

  const navigate = useNavigate();
  const token = window.localStorage.getItem('token')


  useEffect(() => {


    if(token != null){
      goToEntra(navigate)
    } 
    
    
  },[])

}