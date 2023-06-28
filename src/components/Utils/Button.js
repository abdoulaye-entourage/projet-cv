import { Box } from "@mui/joy";
import Button from "@mui/material/Button";
import '../../assets/styles/button.css';

function Buttons({ onChange, label }) {
  return (
    <Box>
      <Button
        sx={{
          background: "#F55F24",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "22px",
          fontSize: "16px",
          borderRadius:'50px',
          width:'202px',
          color:'#FFF'
        }}
        onClick={onChange}
       className="buttonHover"
      >
        {label}
      </Button>
    </Box>
  );
}

export default Buttons;
