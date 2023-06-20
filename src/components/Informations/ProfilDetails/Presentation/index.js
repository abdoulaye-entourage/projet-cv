import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";

export function PresentationText() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
      <Typography
        sx={{color:"#484848", textAlign:"left", fontSize:"14px",fontFamily:"Ninuto sans",lineHeight:"18px", fontWeight:"700" }}
      >
        J'aimerais travailler en{" "}
        <Typography level="body3" textColor="#EE5F36" fontWeight="bold">
          CDI{" "}
        </Typography>
        dans l'informatique plus précisement dans le développement web et mobile
        en tant que{" "}
        <Typography level="body3" textColor="#EE5F36">
          développeur intégrateur web.
        </Typography>{" "}
      </Typography>
      <Box display="flex" flexDirection="column" gap="10px">
        <Typography  sx={{fontSize:"14px", color: "#484848", fontStyle : "normal"
, fontWeight :"400", fontFamily:'Nunito Sans'}}>
          enfant d'une famille de 8, je suis arrivé en France en 2018 dans le
          cadre de mon cursus dans une communauté religieuse où j'ai reçu une
          belle et riche formation humaine, intellectuelle et spirituelle.
        </Typography>
        <Typography  sx={{fontSize:"14px", color: "#484848",fontStyle : "normal"
, fontWeight :"400", fontFamily:'Nunito Sans'}}>
          Après un temps de réflexion, j'ai choisi de me réorienter et
          d'intégrer un parcours de formation qui puisse me permettre de
          retrouver rapidement une voie professionnelle.
        </Typography>
        <Typography  sx={{fontSize:"14px", color: "#484848",fontStyle : "normal"
, fontWeight :"400", fontFamily:'Nunito Sans'}}>
          Je me tourne donc vers LinkedOut pour bénéficier de son accompagnement
          dans ma recherche d'un emploi fiable, stable et durable afin de
          réaliser mes projets d'avenir.
        </Typography>
        <Typography  sx={{fontSize:"14px", color: "#484848",fontStyle : "normal"
, fontWeight :"400", fontFamily:'Nunito Sans'}}>
          Mon parcours atypique témoigne de ma grande polyvalence, de mon
          adaptabilité, d'une grande résilience et d'une détermination sans
          faille à atteindre mon but.
        </Typography>
      </Box>
    </Box>
  );
}
