import React from "react"
import { useDispatch,useSelector } from "react-redux";
import { Button,Card,Grid,CardContent } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const StudentList=({item})=>{
  const dispatch=useDispatch();
  const cricTeam=useSelector(state=>state.gameReducer.cricketTeam)
  const handleCricket=(curr)=>{
    const filtered=cricTeam.filter(item=>item.name===curr.name)
    if(cricTeam.length<11){
      dispatch({
        type:"cricketTeam",
        payload:curr,
      });
    }
  }

  return(
    <div>
  <Card>
    <CardContent>
      <Grid container sapacing={3}>
           <Grid item xs={4}>
             <AccountBoxIcon/>
           </Grid>
           <Grid item xs={8}>
            <span>{item.name}</span>
           </Grid>
           <Grid item xs={6}>
            <span>Physical:{item.phy}</span>
           </Grid>
           <Grid item xs={6}>
            <span>Skills:{item.skill}</span>
           </Grid>
           <Grid item xs={6}>
             <Button variant="contained" color="success" 
             disabled={cricTeam.some(p=>p.name===item.name)}
             onClick={()=>handleCricket(item)}>Cricket</Button>
           </Grid>
           <Grid item xs={6}>
            <Button variant="contained" color="error">Football</Button>
           </Grid>
      </Grid>
    </CardContent>
  </Card>
    </div>
  )
}

export default StudentList