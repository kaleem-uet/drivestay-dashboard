import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme, Container } from "@mui/material";
import OverViewCard1 from "../comp/overviewcard/OverViewCard1";
import CircularProgress from '@mui/joy/CircularProgress';
import OverViewCard2 from "../comp/overviewcard/OverViewCard2";
import OverViewCard3 from "../comp/overviewcard/OverViewCard3";

function OverView() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Container maxWidth="lg" >
      <Grid 
      container 
      spacing={3} // Controls the spacing between grid items
      alignItems="stretch" // Ensures that grid items stretch to match the height of the row
      marginTop= "50px"
   >
       <Grid item xs={12} sm={6} md={4} lg={3}>
        <OverViewCard1 title={'total User Count'}  users={"85 Users"} button1={"All time"} button2 ={"This Month"}/>
       
       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3}  >
        <OverViewCard1 title={'total Host Count'} users={"45 hosts"} button1={"All time"} button2 ={"This Month"}/>
       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3} >
        <OverViewCard1 title={'total Guest  Count'} users={"85 guests"} button1={"All time"} button2 ={"This Month"} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <OverViewCard1 title={'total App  Count'} users={"1000 install"} button1={"All time"} button2 ={"This Month"}/>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} >
        <OverViewCard2  title={'Booking'} total={"Total Booking 6000"} month={"66% month of may"}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} >
        <OverViewCard2  title={'Booking Cancellations'} total={"Total Cancelled Booking 6000"} month={"10% month of may"}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} >
        <OverViewCard2  title={'Revenue'} total={"Total Listing 6000"} month={"50% month of may"} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} >
        <OverViewCard3  title={'Guests Refunds'} total={"Total Revenue 80000"} month={"10% month of may"} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} >
        <OverViewCard3  title={'Payment Processed'} total={"Total Refund 60 "} month={"0% month of may"} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} >
        <OverViewCard3  title={'Listings'} total={" Total Payment 250000 usd "} month={"10% month of may"} />
      </Grid>



      
       

        
    </Grid>
    </Container>
  );
}

export default OverView;
