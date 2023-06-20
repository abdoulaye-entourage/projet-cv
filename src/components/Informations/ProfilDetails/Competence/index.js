import { Box } from "@mui/material";
import { Stack, Typography } from "@mui/joy";
export function Competence() {
  return (
    <Box>
      <Box>
        <Stack
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap="25px"
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
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
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
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
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
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
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
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
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
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "19px",
            }}
          >
            Calme
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
