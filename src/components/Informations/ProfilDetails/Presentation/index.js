import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";

export function PresentationText() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
      <Typography
        level="body2"
        justifyContent="center"
        fontWeight="bold"
        fontSize="12.5px"
        textAlign="left"
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
        <Typography paragraph="true">
          enfant d'une famille de 8, je suis arrivé en France en 2018 dans le
          cadre de mon cursus dans une communauté religieuse où j'ai reçu une
          belle et riche formation humaine, intellectuelle et spirituelle.
        </Typography>
        <Typography paragraph="true">
          Après un temps de réflexion, j'ai choisi de me réorienter et
          d'intégrer un parcours de formation qui puisse me permettre de
          retrouver rapidement une voie professionnelle.
        </Typography>
        <Typography paragraph="true">
          Je me tourne donc vers LinkedOut pour bénéficier de son accompagnement
          dans ma recherche d'un emploi fiable, stable et durable afin de
          réaliser mes projets d'avenir.
        </Typography>
        <Typography paragraph="true">
          Mon parcours atypique témoigne de ma grande polyvalence, de mon
          adaptabilité, d'une grande résilience et d'une détermination sans
          faille à atteindre mon but.
        </Typography>
      </Box>
    </Box>
  );
}
