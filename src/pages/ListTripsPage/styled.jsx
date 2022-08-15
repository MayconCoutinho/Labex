import styled from 'styled-components';
import imgListTripsPage from "../../assets/ListTripsPage.png";


export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgListTripsPage});
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
    background-color: #000000c0;
    width: 200vh;
    height: 100vh;
    
`


export const CssButton = styled.div`

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


export const ContaineTrips = styled.div`

    display: grid;
    

    margin: 2vw 2vw 2vw 2vw;

    align-items: center;
    justify-content: center;
    flex-direction: column;

 
    max-width: auto;
    max-height: auto;



    overflow-y: scroll;
    position: flex;


    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid #a6ff005c;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb{
    
    background-color: #00ff2abb ;
    border-radius: 10px;
  }
    
`

export const CardTrips = styled.div`

    margin-top: 1vw;
    background-color: #fff;
    padding: 3.5vh;
    font-size: 17px;
    cursor: pointer;

    :hover {
        background-color: #dbdbdb;
        
        h1{
            background-color: #fff;
        }
        
    }

    h1{

        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        color: #006bc2;
        background-color: #dbdbdb65 ;
        padding: 5px;
        font-size: 15px;
        margin-top: 2vw;
        margin-bottom: 1vw ;

    }


    p{
        font-family: monospace;
        margin-top: 0.5vw;
    }

    
`

export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap'); 

    font-family: 'Big Shoulders Display', cursive;
    margin: 8vh 0 15vh 0 ;
    color: #00ff2a;
    font-size: 12px;
    padding: 15px;
    

`