import { Box, Stack, Typography } from "@mui/joy";
import React from "react";
import experiences from "../../data/experienceData.json";
import CardFormationExperience from "../Utils/Cards/CardFormationExperience";
// import CardFormationExperience from '../utils/CardFormationExperience';

function Experience() {
  return (
    <Box
      backgroundColor="white"
      borderRadius="10px"
      alignSelf="center"
      display="flex"
      width="100%"
      padding="20px"
      flexDirection="column"
     
    >
      <Typography
        sx={{
          fontFamily: "Nunito sans",
          marginLeft: "60px",
          fontWeight: "700",
          fontSize: "16px",
          fontStyle: "normale",
        }}
      >
        EXPERIENCES
      </Typography>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
        gap="20px"
      >
        {experiences.map((experienceItem, index) => {
          return (
            <CardFormationExperience
              key={index}
              name={experienceItem.experienceName}
              structure={experienceItem.enterprise}
              date={experienceItem.eDate}
              description={experienceItem.eDescription}
              tags={experienceItem.competences}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export default Experience;
