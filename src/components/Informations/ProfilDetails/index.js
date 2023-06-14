import { Stack } from "@mui/material";
import { NameAdresse } from "./NameAdressAudio";
import { Contrat } from "./contrat";
import { PresentationText } from "./Presentation";
import { Competence } from "./Competence";
function ProfileDetails() {
  return (
    <Stack display="flex" gap="42px" flexWrap="wrap">
      <NameAdresse />
      <Contrat flexWrap="wrap" />
      <PresentationText />
      <Competence
        autonome="Autonome"
        consciencieux="consciencieux"
        ecoute="à l'écoute"
        pontuel="Ponctuel"
        calme="Calme"
      />
    </Stack>
  );
}
export default ProfileDetails;
