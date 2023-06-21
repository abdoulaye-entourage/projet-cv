import {  Box, Typography } from "@mui/joy";
import React, { Component } from "react";
// import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import openQuotationMark  from '../../assets/images/“(open).png'
import closeQuatationMark from '../../assets/images/“ (close).png'
import { Stack } from "@mui/material";


class Recommandations extends Component {
  render() {
    return (
      <Box
        display="flex"
        flexDirection='column'
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
            fontStyle: "normale"
          }}
        >
          RECOMMANDATIONS
        </Typography>
        <Stack position='relative' display='flex' gap="25px" flexDirection='row'>

        <Box sx={{ color: "#F55F24", position:'absolute', left : "-30px", top:'-15px'}} >
            <img src={openQuotationMark} alt="guillemet ouvrant" />
          </Box>
        
        <Typography
          sx={{
            display:'flex',
            color: "#484848",
            textAlign: "left",
            fontSize: "14px",
            fontFamily: "Nunito sans",
            lineHeight: "18px",
            fontWeight: "700",

          }}
        >
            MIYAKA est un moteur qui aime les challenges et s’investir dans de
            nouveaux projets. Doté d’un fort esprit d’équipe, il a également
            toujours su travailler en parfaite autonomie et responsabilité tout
            au long de ses missions.
              </Typography>

              <Box sx={{ color: "#F55F24", position: 'absolute', right:'-15px', bottom:'-10px'}}>
          <img src={closeQuatationMark} alt="guillemet ouvrant" />
          </Box>  
          </Stack>
      </Box>
    );
  }
}

export default Recommandations;
