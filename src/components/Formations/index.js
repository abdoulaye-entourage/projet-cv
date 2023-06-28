import React from "react";
import { Helmet } from 'react-helmet';
import CardFormationExperience from "../Utils/Cards/CardFormationExperience";
import { Box } from "@mui/joy";
import formations from "../../data/formationData.json";

function Formation() {
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
        <meta name="description" content="titulaire d'un Master II en littérature et civilisation américaine et caribéenne, je me suis d'abord formé en autodidacte aux bases des langages web, avant de me lancer dans une formation diplômante. Je me forme en alternance afin de mieux maitriser les ficels de ce métier." />
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
      
        FORMATIONS
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
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
