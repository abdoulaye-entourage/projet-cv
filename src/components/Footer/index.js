import { Box, Typography } from "@mui/joy";
import Buttons from "../Utils/Button";

function Footer() {
  function handleClick(event) {
    event.preventDefault();
    window.location = "mailto:abdoulaye@entourage.social";
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="35px"
      padding="26px"
      alignItems="center"
    >
      <Typography level="h6" fontSize="16px">
        Comment pouvez vous me contacter ?
      </Typography>
      <Buttons onChange={handleClick} label="contact" />
    </Box>
  );
}
export default Footer;
