import styled from 'styled-components';
import imgLoginPage from "../../assets/LoginPage.jpg";


export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    background-image: url(${imgLoginPage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 100vh;
    
`
export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap'); 

    margin-bottom: 6vh; 
    font-family: 'Big Shoulders Display', cursive;
    color: #ffffff;
    font-size: 16px;
    background-color: #000000b3;
    padding: 10px;
    
`
export const InputTexto = styled.div`

    margin-bottom: 2vh; 
    display: flex;

    align-items: center;
    justify-content: center;

    input {

        padding: 0 5%;
        min-width: 40vw;
        height: 8vh;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: large;

        
    }
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: center;
    
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
        background-color: #ff6600b8;

            color: #fff;
   
    }


`