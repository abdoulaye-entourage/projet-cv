import { Stack, Box, Typography } from "@mui/joy";
import Audio from "../../../Audio";

export function NameAdresse() {
  return (
    <Stack display="flex" flexDirection="row" flexWrap="wrap" gap="10px">
      <Box flex="1">
        <Typography
          fontFamily="quicksand"
          fontWeight="700"
          lineHeight="35px"
          fontSize="28px"
          sx={{ color: "#F55F24" }}
          level="h3"
        >
          Abdoulaye Toure
        </Typography>
        <Typography
          fontFamily="Nunito Sans"
          fontWeight="700"
          lineHeight="19.1px"
          level="h6"
        >
          20 rue du Clos Feuquières 75015
          Paris(75)
        </Typography>
      </Box>

      <Box flex="2" padding="10px">
        <Audio />
      </Box>
    </Stack>
  );
}
