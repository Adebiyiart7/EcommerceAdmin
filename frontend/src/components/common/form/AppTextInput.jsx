// NODE_NMODULES
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({

// });

const AppTextInput = ({ name, label, labelStyles, ...otherProps }) => {
  // const classes = useStyles();
  const { values, errors, handleChange } = useFormikContext();

  return (
    <div>
      <label className={labelStyles} htmlFor={name}>
        {label} *
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
