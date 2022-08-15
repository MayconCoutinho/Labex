import styled from 'styled-components';
import  imgApplicationFormPage from "../../assets/ApplicationFormPage.jpg";


export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgApplicationFormPage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 100vh;
`
export const CssButton = styled.div`

margin-top: 20px;

button {

border: none;
margin-left: 1vw;
padding: 1.5vw;
border-radius: 40px;
font-size: medium;
width: 10vw;

cursor: pointer;  

}

button:hover{
background-color: #09ff00ac;

    color: #fff;

}    
`

export const ContainerPreto = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #000000c0;;
    width: 200vh;
    height: 100vh;
    
`
export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300&display=swap');
    font-family: 'Big Shoulders Display', cursive;
    margin: 8vh 0 5vh 0 ;
    color: #ffffff;
    font-size: 12px;
    padding: 15px;
    
`

export const InputTexto = styled.div`

    display: grid;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    input {
        padding: 0 5%;
        
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