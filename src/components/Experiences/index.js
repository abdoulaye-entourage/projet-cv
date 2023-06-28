import { Box } from "@mui/joy";
import React from "react";
import { Helmet } from 'react-helmet';
import experiences from "../../data/experienceData.json";
import CardFormationExperience from "../Utils/Cards/CardFormationExperience";

function Experience() {
  return (
    <Box
    backgroundColor="white"
    borderRadius="30px"
    display="flex"
    width="100%"
    padding="20px"
    flexDirection="column"
    paddingBottom='30px'
     
    >
       <Helmet>
        <meta name="description" content="Auparavant, entrepreneur,commerçant de détails, profeseur d'anglais, préparateur de commande, je suis aujourd'hui en alternance dans le cadre d'une formaion en développement web et mobile." />
      </Helmet>
      <Box
        sx={{
          fontFamily: "Nunito sans",
          textAlign:'center',
          fontWeight: "700",
          fontSize: "16px",
          fontStyle: "normale",
          margin:'20px'
        }}
      >
        EXPERIENCES PROFESSIONNELLES
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
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
      </Box>
    </Box>
  );
}

export default Experience;
