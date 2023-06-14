import profilImage from "../../../assets/images/photo-profil.jpeg";
import { Stack, CardMedia } from "@mui/material";
function ImgBox() {
  return (
    <Stack
      sx={{ transform: "rotate(9deg)" }}
      position="relative"
      backgroundColor="rgba(238, 95, 54, 0.1)"
      borderRadius="950px 909px 800px 1000px"
      width="240px"
      height="385px"
      display="flex"
      justifyContent="center"
    >
      <CardMedia
        sx={{
          transform: "rotate(-9deg)",
          borderRadius: "1000px 909px 1000px 1000px",
          width: "220px",
        }}
        component="img"
        height="340px"
        srcSet={profilImage}
        top="30px"
        left="0px"
        alt="cvImage"
      />
    </Stack>
  );
}
export default ImgBox;
