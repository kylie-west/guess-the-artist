import { Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import App from "./App";
import Card from "./Card";


export const Landing = (props) =>{
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedSong, setSelectedSong] = useState('')

return (
    <Wrapper>  
        <h1>Who's Who</h1>
        <h2>A musical guessing game</h2>

        <h3>Pick a genre</h3>
            
         <div>  
      <select
        value={selectedGenre}
        onChange={event => setSelectedGenre(event.target.value)}
      >
        <option value='' />
        {props.genres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>

        <h3> Songs per guess</h3>
        <SongSetting>
            <div>
            <Card padding="25px" bg="silver"> 1</Card>
            </div>
            <div>
            <Card padding="25px" bg="silver"> 2</Card>
            </div>
            <div>
            <Card padding="25px" bg="silver"> 3</Card>
            </div>
        </SongSetting>
        <h3> Artists per guess</h3>
        <ArtistSetting>
            <div>
            <Card padding="25px" bg="silver"> 2</Card>
            </div>
            <div>
            <Card padding="25px" bg="silver"> 3</Card>
            </div>
            <div>
            <Card padding="25px" bg="silver"> 4</Card>
            </div>
        </ArtistSetting>

        
       

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