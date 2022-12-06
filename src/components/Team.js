import React, { useState } from "react"
import { useSelector } from "react-redux"

const Team=()=>{
    const cricTeam =useSelector((state)=>state.gameReducer.cricketTeam)
    console.log("cricteam==>",cricTeam);
    return(
        <div>
            <h1>This Cricket team </h1>
  
       {cricTeam.map((elem)=>{
        return(
            <div>
                <h3>{elem.name} </h3>
            </div>
        )
       })}
   
        </div>
    )
}

export default Team