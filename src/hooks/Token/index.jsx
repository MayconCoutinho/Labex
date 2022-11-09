
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToEntra } from "../../routes/coordinator";
import {GlobalContext} from "../../global/context/useContext.jsx"
import { useContext } from "react";

export const Token = (page) => {
  const navigate = useNavigate()

  const { token } = useContext(GlobalContext)

  useEffect(() => {
    if(token === null || token === undefined){
      goToLoginPage(navigate)
    } else {
      if(page === "login" && token != null){
        goToEntra(navigate)
      }
    }
  },[token])
}