import { Button } from "@mui/material";

const AppButton = ({ color, className, onClick, startIcon, sx, title, type }) => {
  return (
    <Button
      sx={{fontWeight: 500, ...sx}}
      color={color}
      startIcon={startIcon}
      variant="contained"
      disableElevation
      onClick={onClick}
      className={className}
      type={type}
    >
      {title}
    </Button>
  );
};

export default AppButton;
