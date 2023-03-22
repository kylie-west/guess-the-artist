import { Route, Redirect, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Card from "./Card";


export const GameOver = (props) => {

const PlayAgain = () =>{

    return (Redirect("/play")

    
    )
}


return(

    <Wrapper>

    <h1>Game Over</h1>


    <Card padding= "25px">Score:{props.score}</Card>

    <button onClick = {PlayAgain}>Play Again</button>





    </Wrapper>



)

}
export default GameOver

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
`;