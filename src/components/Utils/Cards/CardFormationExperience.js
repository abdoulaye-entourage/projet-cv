import * as React from 'react';
import {Typography, Stack, Box } from "@mui/joy";
import CardModulesCompetences from "./CardModulesCompetences";

function CardFormationExperience({ name, structure, date, description, tags }) {
  console.log(/*taille de l'écran*/)
  return (
      
      <Box
        variant="outlined"
        display='flex'
        flexDirection='column'
        justifyContent='center'
        flexWrap='wrap'
        border="1px solid rgba(238, 95, 54, 0.1)"
        boxShadow='4px 4px 1px rgba(238, 95, 54, 0.1)'
        borderRadius={10}
        padding='15px'
        sx={{
          
        }}
       
      >
        <Stack display='flex' flexDirection='row' flexWrap='wrap'  justifyContent='space-between'> 
        <Typography display='flex' flexDirection='column'>
          <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
            {name}
          </Typography>
          <Typography level="body2">{structure}</Typography>
        </Typography>

          <Typography>{date}</Typography>
   
        </Stack>

       
        <Stack sx={{ my: 3 }}>
          <Typography>{description}</Typography>
        </Stack>

        <Box>
          <Stack display="flex" flexDirection="row" flexWrap="wrap" gap="15px">
            {tags.map((tag, index) => {
              return <CardModulesCompetences key={index} tag={tag} />;
            })}
          </Stack>
        </Box>
     
      </Box>
  );
}
export default CardFormationExperience;
