import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import { IconButton } from "@mui/joy";
// import { createTheme } from '@mui/material/styles'

function SocialMedia() {
  const handleLinkedInShare = () => {
    const urlToShare = encodeURIComponent('https://abdoulaye-entourage.github.io/projet-cv/')
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`, '_blank');
  };
  const handleFacebookClick = (event) => {
    event.preventDefault()
    const urlToShare = encodeURIComponent('https://abdoulaye-entourage.github.io/projet-cv/')
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`, '_blank' );  
  };
  const handleInstagramShare = (event) => {
    event.preventDefault()
    window.open('https://www.instagram.com', '_blank');
  };
  const handleTwitterShare = () => {
    const urlToShare = encodeURIComponent('https://abdoulaye-entourage.github.io/projet-cv/')
    const textToShare = encodeURIComponent('Découvrez ce cv !'); 

    window.open(`https://twitter.com/intent/tweet?text=${textToShare}&url=${urlToShare}`, '_blank');
  };
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
        Pour me donner plus de visibilité, <br/> n'hésitez pas à partager mon CV
      </Box>
      <Box display="flex" flexWrap="wrap" flexDirection="row" gap="20px">
      <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
          onClick={handleLinkedInShare}
        >
          <LinkedInIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
          onClick={handleInstagramShare}
        >
          <InstagramIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
          onClick={handleFacebookClick}
        >
          <FacebookIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          color="danger"
          sx={{ background: "rgba(238, 95, 54, 0.2)", borderRadius: "50px" }}
          onClick={handleTwitterShare}
        >
          <TwitterIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Box>
    </Stack>
  );
}
export default SocialMedia;
