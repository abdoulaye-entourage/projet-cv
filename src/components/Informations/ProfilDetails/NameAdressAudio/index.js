import { Stack, Box, Typography } from "@mui/joy";
import Audio from "../../../Audio";

export function NameAdresse() {
  return (
    <Stack display="flex" flexDirection="row" flexWrap="wrap" gap="10px">
      <Box flex="1">
        <Typography
          fontFamily="quicksand"
          sx={{
            color: "#F55F24",
            fontWeight: "700",
            fontStyle: "normal",
            fontFamily: "Quicksand",
            fontSize: "28px",
            lineHeight: "35px",
          }}
          level="h3"
        >
          Abdoulaye Toure
        </Typography>
        <Typography
          fontWeight="700"
          lineHeight="19.1px"
          level="h6"
          sx={{
            fontFamily: "Nunito Sans",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "19px",
            fontSize: "14px",
          }}
        >
          20 rue du Clos Feuquières 75015 Paris(75)
        </Typography>
      </Box>

      <Box flex="2" padding="10px">
        <Audio />
      </Box>
    </Stack>
  );
}
