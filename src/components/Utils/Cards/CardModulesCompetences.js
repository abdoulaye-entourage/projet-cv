import React from "react";
import { Typography } from "@mui/joy";

const CardModulesCompetences = ({ tag }) => {
  return (
    <Typography
      level="body3"
      fontWeight="600"
      lineHeight="19px"
      fontSize="14px"
      padding="4px"
     
  
      
      backgroundColor="rgba(238, 95, 54, 0.1);"
      sx={{color:"#EE5F36", 
      background:"rgba(238, 95, 54, 0.1);",borderRadius:"5px", fontFamily:"Nunito sans", fontWeight:"400", fontStyle:"normal", fontSize:"14px", lineHeight:"19px"}}

    >
      {tag}
    </Typography>
  );
};

export default CardModulesCompetences;
