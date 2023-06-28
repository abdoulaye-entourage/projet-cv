import React from "react";
import { Stack, Typography } from "@mui/joy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DescriptionIcon from "@mui/icons-material/Description";
import SmsIcon from "@mui/icons-material/Sms";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Chip from "@mui/material/Chip";
function ContratCard({ contratElement }) {
  return (
    <Stack
      key={contratElement.type}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignContent="center"
      
    >
      <Stack>
        <Stack color="#EE5F36">
          <Chip
            variant="outlined"
            sx={{ border: "none",  fontSize: "12px", color: "#F55F24" }}
            avatar={
              <Typography sx={{ background: "none" }}>
                <DescriptionIcon sx={{ color: "#F55F24" }} />
              </Typography>
            }
            label="Type de contrat"
          />
        </Stack>
        <Typography
          sx={{
            fontWeight: "400px",
            color: "#6D6C6C",
            fontFamily: "Nunito sans",
            fontSize: "14px",
            fontStyle: "normal", 
            textAlign:'center',
           
          }}
        >
          {contratElement.type}
        </Typography>
      </Stack>

      <Stack>
        <Stack  color="#EE5F36">
          <Chip
            variant="outlined"
            sx={{ border: "none",fontSize: "12px", color: "#F55F24" }}
            avatar={
              <Typography sx={{ background: "none" }}>
                <EventAvailableIcon sx={{ color: "#F55F24" }} />
              </Typography>
            }
            label="Disponibilité"
          />
        </Stack>
        <Typography
          
          sx={{
            fontWeight: "400px",
            color: "#6D6C6C",
            fontFamily: "Nunito sans",
            fontSize: "14px",
            fontStyle: "normal",
            textAlign:'center',
            marginLeft:'55px',
            
          }}
        >
          {contratElement.disponibilité}
        </Typography>
      </Stack>

      <Stack>
        <Stack  color="#EE5F36">
          <Chip
            variant="outlined"
            sx={{ border: "none",fontSize: "12px", color: "#F55F24" }}
            avatar={
              <Typography sx={{ background: "none" }}>
                <SmsIcon sx={{ color: "#F55F24" }} />
              </Typography>
            }
            label="Langues parlées"
          />
        </Stack>
        <Typography
          sx={{
            fontWeight: "400px",
            color: "#6D6C6C",
            fontFamily: "Nunito sans",
            fontSize: "14px",
            fontStyle: "normal",
            textAlign:'center',
            marginLeft:'42px',
          }}
        >
          {contratElement.langue}
        </Typography>
      </Stack>

      <Stack>
        <Stack color="#EE5F36">
          <Chip
            variant="outlined"
            sx={{fontSize: "12px",border: "none", color: "#F55F24" }}
            avatar={
              <Typography sx={{ background: "none" }}>
                <DirectionsCarIcon sx={{ color: "#F55F24" }} />
              </Typography>
            }
            label="Mobilité"
          />
        </Stack>
        <Typography
          sx={{
            fontWeight: "400px",
            color: "#6D6C6C",
            fontFamily: "Nunito sans",
            fontSize: "14px",
            fontStyle: "normal",
            textAlign:'center',
           display:'flex',
           marginLeft:'120px',
           
            
          }}
        >
          {contratElement.mobilité}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ContratCard;
