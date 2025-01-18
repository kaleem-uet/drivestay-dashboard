import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "../ProgressCircle";
import PersonIcon from '@mui/icons-material/Person';
const StatBox = ({ title, subtitle, icon, progress, button1,button2 }) => {
  return (
    <Box width="100%" m="0 30px">
       <Box display="flex" justifyContent="space-between" sx={{mb:1}}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            {title}
          </Typography>
        </Box>
      <Box display="flex"  sx={{flexDirection:'row',alignItems:"center",gap:1}}>
      <PersonIcon/>
        <Typography variant="h5"  textAlign="center" >{subtitle} </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between"  sx={{mt:1}}>
        <Typography variant="h5">{button1}</Typography>
        <Typography variant="h5">{button2}</Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
