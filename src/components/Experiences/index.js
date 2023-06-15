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
      padding="20px 0 20px 0"
      flexDirection="column"
      gap="20px"
    >
      <Typography marginLeft="50px" level="h4">
        EXPERIENCES
      </Typography>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
        gap="60px"
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
