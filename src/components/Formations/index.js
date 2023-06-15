import React from "react";
import CardFormationExperience from "../Utils/Cards/CardFormationExperience";
import { Box, Stack, Typography } from "@mui/joy";
import formations from "../../data/formationData.json";

function Formation() {
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
        FORMATIONS
      </Typography>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap="60px"
        padding="10px"
      >
        {formations.map((formationItem, index) => {
          return (
            <CardFormationExperience
              key={index}
              name={formationItem.formationName}
              structure={formationItem.ecole}
              date={formationItem.date}
              description={formationItem.fDescription}
              tags={formationItem.modules}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export default Formation;
