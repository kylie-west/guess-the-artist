# [Who's Who?](https://guesswhoswho.netlify.app/)

## Project Overview

This project was completed as part of Cook Systems' FastTrack program. We were provided with a loose set of requirements, an empty React app, and a few helper functions for retrieving an auth token and interacting with the Spotify Web API. All other decisions were left up to us.

### Basic Requirements

- Create a music/artist guessing game
- The user should be able to play a small selection of songs and guess which artist they belong to
- The home page should be a configuration page in which the user can select a genre, number of songs, and number of artists to display per round
- User settings should be persisted between sessions

## Approach and Gameplay

First, we created [a wireframe](https://www.figma.com/file/hYpatH93rKkF34b1tgOn6u/Who's-Who?node-id=0%3A1&t=H6u8Ek3n9Np2YGK5-1) to work out the overall design of the UI and gameplay.

After configuring their settings on the landing page, the player is taken to the game, where they are presented with a group of songs and a group of artists. All songs belong to one artist, and the goal of the game is to guess which one it is. The player can play each song, and then select which artist they believe is correct.

When the player answers correctly, their score increases. If the player makes a mistake, they lose one "life." Once they run out of lives, they are taken to a "game over" screen, which displays their final score as well as a button which returns to the landing page.

Rather than limit the number of rounds, we decided to go with an endless game loop, allowing the player to accumulate as many points as they can, as this would maximize replayability.

## The Data

All artist and track data are fetched from the Spotify Web API via the "/search" endpoint.

At the beginning of each game, a pool of artists is retrieved based on the player's selected genre. For each round, a randomized subset of the artist list is selected. From this subset, one random artist is chosen to become the "correct artist" for the round.

Next, a list of tracks for the chosen artist is fetched from the API. The list of tracks is then filtered to ensure that each track contains a preview URL, and that their "artists" property actually includes the chosen artist. From this filtered list, a subset of tracks is randomly selected to be displayed for the current round.
