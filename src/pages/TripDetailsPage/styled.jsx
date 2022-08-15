import styled from 'styled-components';
import  imgTripDetailsPage from "../../assets/TripDetailsPage.png";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgTripDetailsPage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 100vh;
`

export const ContainerPreto = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #000000d1;
    width: 200vh;
    height: 100vh;
    
`
export const Titulo = styled.div`

    text-align: center;
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300&display=swap');
    font-family: 'Big Shoulders Display', cursive;
    margin: 8vh 0 5vh 0 ;
    color: #00ff0d;
    font-size: 14px;
    padding: 15px;
    
`

export const CssButton = styled.div`

select {
    padding: 0 5%;
    min-width: 30vw;
    height: 6vh;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: large;

  
    }

margin: 20px;
button {

border: none;
margin-left: 1vw;
padding: 1.5vw;
border-radius: 40px;
font-size: 14px;
width: 10vw;

cursor: pointer;  

}

button:hover{
background-color: #09ff00ac;

    color: #fff;

}    
`


export const ContainerScroll = styled.div`

  text-align: center;

  h4 {
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
    color: #ffa600;
    font-size: 30px;
  }

  font-size: 13px;
    
  background-color: #fff;

  margin-bottom: 5vw;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 30vh;
  height: 20vh;

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


export const ListCandidatos = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    display: grid;
    grid-template-columns: 5vw 0;

    padding: 1vh 15vh 1vh 1vh;
    font-size: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #a59400;
    white-space: nowrap;
    background-color: #ffffff;
    margin-top: 2vh;
  }

  h1:hover {
    background-color: #e7e7e7;
  }


  h2:hover {
    background-color: #e7e7e7;
  }

  button {
    
    padding: 1vh 3.5vw 1vh 1vh;
    cursor: pointer;
  }

  button:hover {
    background-color: #ee4141;
  }

  h2 > button:hover {
    background-color: #86cf5b;
  }

`;
