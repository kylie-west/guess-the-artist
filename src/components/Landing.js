import { Route, Redirect, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import App from "./App";
import Card from "./Card";
import Game from "./Game";
import Artist from "./Artist";
import genreList from "./genreList";

export const Landing = props => {
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
			<Header>
				<h1>Who's Who?</h1>
				<h2>A musical guessing game</h2>
			</Header>

			<div>
				<h3>Pick a genre</h3>
				<select
					value={props.config.selectedGenre}
					onChange={event =>
						props.setConfig({
							...props.config,
							selectedGenre: event.target.value
						})
					}>
					<option value="" />
					{genreList.genres.map(genre => (
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

			<div>
				<h3>Songs per guess</h3>
				<SongSetting>
					{numSongsOptions.map(option => (
						<Card
							width="100px"
							height="100px"
							key={option}
							onClick={() =>
								props.setConfig({ ...props.config, numSongs: option })
							}
							selected={props.config.numSongs === option}>
							{option}
						</Card>
					))}
				</SongSetting>
			</div>

			<div>
				<h3>Artists per guess</h3>
				<ArtistSetting>
					{numArtistsOptions.map(option => (
						<Card
							width="100px"
							height="100px"
							key={option}
							onClick={() =>
								props.setConfig({ ...props.config, numArtists: option })
							}
							selected={props.config.numArtists === option}>
							{option}
						</Card>
					))}
				</ArtistSetting>
			</div>

			<Button to="/play"> Submit </Button>
		</Wrapper>
	);
};

export default Landing;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	gap: 50px;
	min-height: 100vh;
	text-align: center;

	select {
		padding: 5px 0;
		margin-top: 10px;
		font-family: Cairo;
		font-size: 1.4rem;
		color: rgb(46, 42, 59);

		@media (max-width: 700px) {
			margin: 0;
		}
	}
`;

const Header = styled.div`
	margin-top: 50px;

	h1 {
		font-family: Audiowide;
		font-size: 4rem;
		color: #584a8c;
	}

	h2 {
		font-weight: 300;
	}
`;

const SongSetting = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	margin-top: 10px;
`;

const ArtistSetting = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	margin-top: 10px;
`;

const Button = styled(Link)`
	display: block;
	padding: 10px 20px;
	background: #735fbf;
	text-decoration: none;
	color: white;
	border-radius: 4px;

	&:hover {
		background: #584a8c;
	}
`;
