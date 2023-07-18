import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";

export function PresentationText() {
  return (
    <Box display="flex" flexDirection="column"  alignItems="center" justifyContent="left" gap="20px">
      <Typography
        sx={{
          color: "#484848",
          textAlign: "left",
          fontSize: "16px",
          fontFamily: "Nunito sans",
          lineHeight: "19.1px",
          fontWeight: "700",
          width:'100%'
        }}
      >
        J'aimerais travailler en{" "}
        <Typography level="body3" textColor="#EE5F36" fontWeight="bold">
          CDI{" "}
        </Typography>
        dans l'informatique plus précisement dans le développement web et mobile
        en tant que{" "}
        <Typography level="body3" textColor="#EE5F36">
          développeur intégrateur web,
        </Typography>{" "}
        un domaine qui m'a toujours passioné.
      </Typography>
      <Box display="flex" flexDirection="column" gap="10px">
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
        Je suis né au Sénégal et je suis titulaire d'un Master 2 en littérature et civilisation américaine et caribéenne.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
         Après le master, je me suis formé en autodidacte avant de créer une société multimédia tout en enseignant l'anglais à des lycéens, collégiens et particuliers.
         Je suis arrivé en France début 2020 et j'ai travaillé comme préparateur de commande dans une épicerie à Montreuil.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
          Je me suis tourné donc vers LinkedOut pour bénéficier de son accompagnement
          dans ma recherche d'un emploi fiable, stable et durable afin de
          réaliser mes projets d'avenir.
          Je travail en tant qu'alternant développeur web et web mobile chez Entourage jusqu'en Octobre 2023.  
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#484848",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Nunito sans",
          }}
        >
          Mon parcours atypique témoigne de ma grande polyvalence, de mon
          adaptabilité, d'une grande résilience et d'une détermination sans
          faille à atteindre mon but.
        </Typography>
      </Box>
    </Box>
  );
}
