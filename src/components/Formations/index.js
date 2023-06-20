import React from "react";
import CardFormationExperience from "../Utils/Cards/CardFormationExperience";
import { Box, Typography } from "@mui/joy";
import formations from "../../data/formationData.json";

function Formation() {
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
        FORMATIONS
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="20px"
        padding="10px"
        width="auto"
        height="100%"
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
      </Box>
    </Box>
  );
}

export default Formation;