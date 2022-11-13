// NODE_NMODULES
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage";

const AppTextInput = ({ name, label, labelStyles, ...otherProps }) => {
  const { values, errors, handleChange, touched, setFieldTouched } =
    useFormikContext();
  
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
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default AppTextInput;
