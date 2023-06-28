import { Box } from "@mui/material";
import { Typography } from "@mui/joy";
export function Competence() {
  return (
    
      <Box 
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap="20px"
      alignItems="center"
      justifyContent="left"
      marginBottom="15px"
      >
          <Typography
            sx={{
              color: "#EE5F36",
              background: "rgba(238, 95, 54, 0.1);",
              borderRadius: "5px",
              fontFamily: "Nunito sans",
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
              padding:"4px"
            }}
          >
            Autonomone
          </Typography>
          <Typography
            sx={{
              color: "#EE5F36",
              background: "rgba(238, 95, 54, 0.1);",
              borderRadius: "5px",
              fontFamily: "Nunito sans",
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
              padding:"4px"
            }}
          >
            Consciencieux
          </Typography>
          <Typography
            sx={{
              color: "#EE5F36",
              background: "rgba(238, 95, 54, 0.1);",
              borderRadius: "5px",
              fontFamily: "Nunito sans",
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
              padding:"4px"
            }}
          >
            à l'écoute
          </Typography>
          <Typography
            sx={{
              color: "#EE5F36",
              background: "rgba(238, 95, 54, 0.1);",
              borderRadius: "5px",
              fontFamily: "Nunito sans",
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
              padding:"4px"
            }}
          >
            Ponctuel
          </Typography>
          <Typography
            sx={{
              color: "#EE5F36",
              background: "rgba(238, 95, 54, 0.1);",
              borderRadius: "5px",
              fontFamily: "Nunito sans",
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
              padding:"4px"
            }}
          >
            Calme
          </Typography>
        
      </Box>
    
  );
}
