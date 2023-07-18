import { Box, Typography } from "@mui/joy";
import React from "react";
import openQuotationMark from "../../assets/images/“ (2).svg";
import closeQuatationMark from "../../assets/images/“ (3).svg";
import { Stack } from "@mui/material";
import '../../../src/App.css'

function Recommandations() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="10px"
      width="80%"
      margin="auto"
      marginBottom="15px"
      alignItems="center"
    >
      <Typography
        sx={{
          fontFamily: "Nunito sans",
          marginLeft: "60px",
          fontWeight: "700",
          fontSize: "16px",
          fontStyle: "normal",
        }}
      >
        RECOMMANDATIONS
      </Typography>
      <Stack position="relative" display="flex" gap="25px" flexDirection="row">
        <Box sx={{ color: "#F55F24", position: "absolute", left: "-35px", top: "-20px" }}>
          <img src={openQuotationMark} alt="guillemet ouvrant" />
        </Box>

        <Typography
          sx={{
            color: "#484848",
            textAlign: "left",
            fontSize: "16px",
            fontFamily: "Nunito sans",
            lineHeight: "19.1px",
            fontWeight: "700",
          }}
        >
          J’ai accompagné Abdoulaye dans son parcours de recherche d’emploi pendant plusieurs semaines.
          Bien que n’étant pas un expert de son domaine, je peux témoigner de ses nombreuses qualités : Abdoulaye est déterminé, courageux, curieux, débrouillard, ouvert, il a envie d’apprendre et d’avancer. Il est également posé, méthodique, discipliné, fiable, ponctuel et respectueux.
          Je suis convaincu qu’il saura faire bénéficier son futur employeur de ses nombreuses qualités. 
          <span className='nomCitation'>Olivier Frady, Consultant et Coach LinkedOut</span>
        </Typography>

        <Box sx={{ color: "#F55F24", position: "absolute", right: "-18px", bottom: "-15px" }}>
          <img src={closeQuatationMark} alt="guillemet ouvrant" />
        </Box>
      </Stack>
    </Box>
  );
}

export default Recommandations;
