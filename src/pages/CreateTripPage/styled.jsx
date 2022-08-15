import styled from 'styled-components';
import imgCreateTripPage from "../../assets/CreateTripPage.jpg";


export const Container = styled.div`



    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgCreateTripPage});
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

    background-color: #0000007a;
    width: 200vh;
    height: 100vh;
    
`
export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300&display=swap');
    font-family: 'Big Shoulders Display', cursive;
    margin: 8vh 0 5vh 0 ;
    color: #00ff0d;
    font-size: 12px;
    padding: 15px;
    
`

export const CssButton = styled.div`

margin-top: 20px;

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

export const InputTexto = styled.div`

    display: grid;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    input {
        padding: 0 5%;
        min-width: 30vw;
        height: 6vh;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: large;
        margin-top: 2vh;   
        
    }

    select {
    

    padding: 0 5%;
    min-width: 33vw;
    height: 6vh;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: large;
    margin-top: 2vh; 

    
    }
`