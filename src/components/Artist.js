import React, { useRef, useState } from "react";
import styled from "styled-components";

import Card from "./Card";

const Artist = ({url,artistName}) => {



    return (
        
        <Card width="250" height="290">  
             <img
      src= {url}
      alt="new"
      width = "250" height="248"
      />
      
      {artistName}

        
        </Card>


        


        



    )






}
export default Artist