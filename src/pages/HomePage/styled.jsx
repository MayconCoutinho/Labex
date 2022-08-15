import styled from 'styled-components';
import imgHomePage from "../../assets/HomePage.jpg";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgHomePage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 100vh;
`
export const Retangulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #000000c0;
    width: 200vh;
    height: 100vh;

`

export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap');
    
    
    font-family: 'Big Shoulders Display', cursive;

    margin: 8vh 0 15vh 0 ;
    color: #73ff00;
    font-size: 16px;

`

export const Button = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    margin-bottom: 8vh;

    button {
        display: grid;
        border: none;
        outline: none;
        border-radius: 32px;
        font-size: 18px;
        padding: 1vw;
        min-width: 25vw;
        min-height: 4vw;
        cursor: pointer;

    }




    button:hover {
        background-color: #90ff90;
        color: #002e02;

        img{

            margin-left: -1vw;
            margin-top: -4vw;
            animation: rotation 2s linear infinite;
            width: 8vw;

            @keyframes rotation {
                    0% {
                        transform: rotate(0deg);                      
                    }
                    25% {
                        transform: rotate(-10deg);
                    }
                    50% {
                        transform: rotate(10deg);
                    }
                    75% {
                        transform: rotate(-10deg);
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                    
                    } 

        }
   
    }


    img {

        position: absolute;
        margin-top: -1vh;
        margin-left: 2vw;
    }
`