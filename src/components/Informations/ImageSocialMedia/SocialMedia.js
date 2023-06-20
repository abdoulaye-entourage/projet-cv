import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import { IconButton } from "@mui/joy";
// import { createTheme } from '@mui/material/styles'

function SocialMedia() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        textAlign="center"
        marginBottom="25px"
        fontFamily="Nunito sans"
        fontStyle="normal"
        fontWeight="400"
        sx={{ color: "#6D6C6C", fontSize: "14px" }}
        lineHeight="24px"
      >
        Pour me donner plus de visibilité, n'hésitez pas à partager mon CV
      </Box>
      <Box display="flex" flexWrap="wrap" flexDirection="row" gap="40px">
        <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
        >
          <InstagramIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
        >
          <FacebookIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
        >
          <TwitterIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Box>
    </Stack>
  );
}
export default SocialMedia;
