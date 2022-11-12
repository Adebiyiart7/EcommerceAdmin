// NODE_NMODULES
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  label: {
    display: "block",
    fontWeight: 500,
    marginBottom: 3,
    fontFamily: "'Inter', serif",
    color: "var(--primaryText)",
  },
});

const AppTextInput = ({ name, label, ...otherProps }) => {
  const classes = useStyles();
  const { values, errors, handleChange } = useFormikContext();

  return (
    <div>
      <label className={classes.label} htmlFor={name}>
        {label}:
      </label>
      <TextField
        fullWidth
        required
        size="small"
        value={values[name]}
        onChange={handleChange(name)}
        {...otherProps}
      />
      <div>{errors[name]}</div>
    </div>
  );
};

export default AppTextInput;
