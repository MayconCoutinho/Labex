import styled from "styled-components";
import imgPainelAdministrativo from "../../assets/AdminHomePage.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${imgPainelAdministrativo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
`;

export const ContainerPreto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #000000d3;;
  width: 200vh;
  height: 100vh;
`;
export const Titulo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300&display=swap");
  font-family: "Big Shoulders Display", cursive;
  margin: 8vh 0 5vh 0;
  color: #ffffff;
  font-size: 12px;
  padding: 15px;
`;

export const CssButton = styled.div`

margin-top: 20px;
margin-bottom: 20px;

button {
white-space: nowrap;
border: none;
margin-left: 1vw;
padding: 1.5vw;
border-radius: 40px;
font-size: 14px;
width: 8vw 8vw 8vw 8vw;

cursor: pointer;  

}

button:hover{
background-color: #09ff00ac;

    color: #fff;

}    
`
export const ContainerDetalhes = styled.div`
    
    
  margin-bottom: 5vw;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 60vh;
  height: 40vh;

  overflow-y: scroll;
  position: flex;

  ::-webkit-scrollbar {
    width: 10px;
    border: 1px solid #a6ff005c;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00ff2abb;
    border-radius: 10px;
  }
`;

export const CardListViagens = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    display: grid;
    grid-template-columns: 11vw 0;

    padding: 1.2vw 30vh 1.2vw 2vh;
    font-size: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #000;
    white-space: nowrap;
    background-color: #ffffff;
    margin-top: 2vh;
  }

  h1:hover {
    background-color: #e7e7e7;
  }



  h2 {
    display: grid;
    grid-template-columns: 11vw 0;

    padding: 1.2vw 30vh 1.2vw 2vh;
    font-size: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #000;

    white-space: nowrap;
    background-color: #ffffff;
    margin-top: 2vh;
  }

  h2:hover {
    background-color: #e7e7e7;
  }

  button img {

    width: 1.5vw;
  }

  button {
    border: none;
    background: none;
    margin-left: 12vw;
    cursor: pointer;
  }

  button:hover {
    background-color: #ee4141;
  }

  h2 > button {
    
    background-color: #86cf5b;
  }

  h2 > button:hover {

    background-color: #86cf5b;
  }

`;

