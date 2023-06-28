// import Box from '@mui/material/Box'
import ProfileDetails from "./ProfilDetails";
import SocialMedia from "./ImageSocialMedia/SocialMedia";
import ImgBox from "./ImageSocialMedia/ImgBox";
import { Box, Stack } from "@mui/material";
function GeneralProfilInfos() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      padding="38px"
      flexWrap="wrap"
      width="100%"
      gap="15px"
      borderRadius="30px"
      backgroundColor="white"
    >
      <Stack flex="1" alignItems="center" gap="22px" display="flex">
        <ImgBox flex="2" />
        <SocialMedia flex="1" />
      </Stack>
      <Stack flex="2" padding="15px">
        <ProfileDetails />
      </Stack>
    </Box>
  );
}
export default GeneralProfilInfos;
