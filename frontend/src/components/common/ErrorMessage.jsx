// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  error: {
    color: "var(--danger)",
    fontSize: 14,
    fontWeight: 500,
  },
});

const ErrorMessage = ({ message, visible }) => {
  const classes = useStyles();

  if (!visible) return "";

  return <div className={classes.error}>{message}</div>;
};

export default ErrorMessage;
