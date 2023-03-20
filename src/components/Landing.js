import { Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";


export const Landing = () =>{

    
return (
    <Wrapper>  
        <h1>Who's Who</h1>
        <h2>A musical guessing game</h2>

        <h3>Pick a genre</h3>

        <h3> Songs per guess</h3>
        <SongSetting>
            <div>
                <p> 1</p>
            </div>
            <div>
                <p> 2</p>
            </div>
            <div>
                <p> 3</p>
            </div>
        </SongSetting>
        <h3> Artists per guess</h3>
        <ArtistSetting>
            <div>
                <p> 1</p>
            </div>
            <div>
                <p> 2</p>
            </div>
            <div>
                <p> 3</p>
            </div>
        </ArtistSetting>


        
        <button>Confirm</button>

    </Wrapper>



)



}

export default Landing

const SongSetting = styled.div`
	display: flex;
	justify-content: space-between;
    align-items: center;
	width: 20%;
`;

const ArtistSetting = styled.div`
	display: flex;
	justify-content: space-between;
    align-items: center;
	width: 20%;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
`;