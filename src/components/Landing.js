import { Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'


export const Landing = () =>{

    
return (
    <div>  
        <h1>Who's Who</h1>
        <h2>A musical guessing game</h2>

        <h3>Pick a genre</h3>

        <h3> Songs per guess</h3>
        <div class = "songsetting">
            <div>
                <p> 1</p>
            </div>
            <div>
                <p> 2</p>
            </div>
            <div>
                <p> 3</p>
            </div>
        </div>
        <h3> Artists per guess</h3>
        <div class = "artistsetting">
            <div>
                <p> 1</p>
            </div>
            <div>
                <p> 2</p>
            </div>
            <div>
                <p> 3</p>
            </div>
        </div>


        
        <button>Confirm</button>

    </div>



)











}

export default Landing