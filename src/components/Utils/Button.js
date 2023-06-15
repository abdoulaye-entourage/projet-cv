import { Box } from "@mui/joy";
import Button from "@mui/material/Button";

function Buttons({ onChange, label }) {
 

  return (
    <Box>
      <Button
        sx={{ background: "#F55F24" }}
        onClick={onChange}
        variant="contained"
      >
        {label}
      </Button>
    </Box>
  );
}

export default Buttons;
