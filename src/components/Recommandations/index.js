import { Box, Typography } from "@mui/joy";
import React, { Component } from "react";
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";

class Recommandations extends Component {
  render() {
    return (
      <Box
        display="flex"
        gap="10px"
        width="80%"
        margin="auto"
        marginBottom="15px"
        flexDirection="column"
        alignItems="center"
      >
        <Typography  sx={{fontFamily:'Nunito sans', fontWeight: "700", fontSize:"20px",  fontStyle:"normale" }}>Recommandations</Typography>
        <Typography          sx={{color:"#484848", textAlign:"left", fontSize:"14px",fontFamily:"Ninuto sans",lineHeight:"18px", fontWeight:"700" }}
>
          <Typography sx={{ color: "#F55F24" }}>
            <FormatQuoteSharpIcon />
          </Typography>
          <b>
            MIYAKA est un moteur qui aime les challenges et s’investir dans de
            nouveaux projets. Doté d’un fort esprit d’équipe, il a également
            toujours su travailler en parfaite autonomie et responsabilité tout
            au long de ses missions.
          </b>
          <Typography sx={{ color: "#F55F24" }}>
            <FormatQuoteSharpIcon />
          </Typography>
        </Typography>
      </Box>
    );
  }
}

export default Recommandations;
