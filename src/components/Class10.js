import React from 'react'
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import StudentList from './StudentList';
import bulbOff from '../images/bulb-off.jpg'
import bulbOn from "../images/bulb-on.jpg"
export default function ClassX() {
  const bulbStatus=useSelector(state=>state.gameReducer.bulb)
  const students = [
    {
      name: "Raveen Sinha",
      phy: 7,
      skill: 8,
    },
    {
      name: "Sumit Kumar",
      phy: 6,
      skill: 9,
    },
    {
      name: "Raheem Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: "lalit Kadarkar",
      phy: 7,
      skill: 7,
    },
    {
      name: "Prakash Kumar",
      phy: 5,
      skill: 7,
    },
    {
      name:"Areen Khan",
      phy:8,
      skill:9,
    },
    {
      name:"Aftab Shaikh",
      phy:8,
      skill:6,
    }
  ];    
return(
<div className="main3">
    <h1 >ClassX - {bulbStatus?(
      <img src={bulbOn} alt='img1' height="80px" width="80px"/>):
      (<img src={bulbOff} alt='img2' height="80px" width="80px"/>)}</h1>
     <Grid container spacing={3}>
        {
            students.map((item,index)=>
                <Grid key={index} item xs={3}>
                  <StudentList item={item}/>
                </Grid>
            )
        }
     </Grid>
</div>
)
    }