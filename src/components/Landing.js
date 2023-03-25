import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import genreList from "./genreList";
import Card from "./Card";

export const Landing = ({ config, setConfig }) => {
	const numSongsOptions = [1, 2, 3];
	const numArtistsOptions = [2, 3, 4];

	return (
		<Wrapper>
			<Header>
				<h1>Who's Who?</h1>
				<h2>A musical guessing game</h2>
			</Header>

			<div>
				<h3>Pick a genre</h3>
				<select
					value={config.selectedGenre}
					onChange={event =>
						setConfig({
							...config,
							selectedGenre: event.target.value
						})
					}>
					<option value="" />
					{genreList.map(genre => (
						<option key={genre} value={genre}>
							{genre}
						</option>
					))}
				</select>
			</div>

			<div>
				<h3>Songs per guess</h3>
				<SongSetting>
					{numSongsOptions.map(option => (
						<Card
							width="100px"
							height="100px"
							key={option}
							onClick={() => setConfig({ ...config, numSongs: option })}
							selected={config.numSongs === option}>
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
							onClick={() => setConfig({ ...config, numArtists: option })}
							selected={config.numArtists === option}>
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
