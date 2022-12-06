import React from 'react'
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import StudentList from './StudentList';

export default function Class9() {
  const bulbStatus=useSelector(state=>state.gameReducer.bulb)
  const students = [
    {
      name: "Pravin Sinha",
      phy: 7,
      skill: 8,
    },
    {
      name: "Ravi Kumar",
      phy: 6,
      skill: 9,
    },
    {
      name: "Zaman Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: "Rohit Kadarkar",
      phy: 7,
      skill: 7,
    },
    {
      name: "Sai Kumar",
      phy: 5,
      skill: 7,
    },
  ];   
   
return(
<div className="main2">
    <h1 >ClassIX - {bulbStatus?"on":"off"}</h1>

     <Grid container spacing={3}>
        {
            students.map((item)=>
                <Grid item xs={3}>
                  <StudentList item={item}/>
                </Grid>
            )
        }
     </Grid>
</div>
)
    }