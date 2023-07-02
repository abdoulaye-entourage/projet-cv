import { Box } from "@mui/joy";
import MUIButton from "@mui/material/Button";
import '../../assets/styles/button.css';

function Button({ onChange, label }) {
  return (
    <Box>
      <MUIButton
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
      </MUIButton>
    </Box>
  );
}

export default Button;
