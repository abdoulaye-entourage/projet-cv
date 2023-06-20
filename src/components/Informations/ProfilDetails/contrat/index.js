import { Box } from "@mui/joy";
import dataContrat from "../../../../data/contratData.json";
import ContratCard from "../../../ContratCard";
export function Contrat() {
  return (
    <Box flexWrap="wrap">
      {dataContrat.map((contratElement, index) => {
        return <ContratCard key={index} contratElement={contratElement} />;
      })}
    </Box>
  );
}
