import { Route, Redirect, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import App from "./App";
import Card from "./Card";
import Game from "./Game";
import Artist from "./Artist"

const SubmitToGame = () =>{

    return (Redirect("/play")

    
    )
}


export const Landing = (props) =>{
    const [selectedGenre, setSelectedGenre] = useState("");
    const numSongsOptions = [1, 2, 3];
    const numArtistsOptions = [2, 3, 4];
    // const [selectedGenre, setSelectedGenre] = useState('')
    // const [selectedSong, setSelectedSong] = useState([
    //     {title: '1', color:'silver',  id:1},
    //     {title: '2',color:'silver',id:2},
    //     {title: '3',color:'silver',id:3}
    // ])
    // const [clicked, setClicked] = useState(false)
    
    // const handleInput = (e) =>{
    //     setClicked(isClicked => !isClicked)
        
    //     console.log(e.target.value)
    //     console.log(value)
    //     //props.config.setConfig(e.target.value)
        
    // }
    

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

        {/* <h3> Songs per guess</h3>
        <SongSetting>
            {selectedSong.map((song) => (
                <div>
                    <Card className = {{clicked}}onClick= {handleInput}color ={song.color}padding="25px"> {song.title}</Card>
                    


                </div>
            ))}
            
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
        </ArtistSetting> */}

<h3>Songs per guess</h3>
    <SongSetting>
        {numSongsOptions.map((option) => 
            (<Card padding="25px" key={option} onClick={() => props.setConfig({ ...props.config, numSongs: option })} selected={props.config.numSongs === option}> {option} </Card>)
        )}
    </SongSetting>
    <h3>Artists per guess</h3>
    <ArtistSetting>
        {numArtistsOptions.map((option) => 
            (<Card padding="25px" key={option} onClick={() => props.setConfig({ ...props.config, numArtists: option })} selected={props.config.numArtists === option}> {option} </Card>)
        )}
    </ArtistSetting>

        <button onClick = {SubmitToGame}>Confirm</button>
        

        
       

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