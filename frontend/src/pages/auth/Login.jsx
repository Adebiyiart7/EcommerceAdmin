// NODE_MODULES
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { login, reset } from "../../features/auth/authSlice";

// LOCAL IMPORTS

const useStyles = makeStyles({
  button: {
    height: 40,
    backgroundColor: "var(--primaryColor) !important",
    marginTop: "16px !important",
    fontFamily: "inherit !important",
  },
  container: {
    maxWidth: 350,
    margin: "auto",
    marginTop: 120,
    color: "var(--primaryText)",
    fontFamily: "'Inter', serif",
  },
  label: {
    fontWeight: 500,
    display: "block",
    margin: "10px 0 5px 0",
  },
  form: {
    margin: "0 16px",
  },
  header: {
    fontSize: 35,
    fontWeight: 800,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) console.log(message); // TODO show alert

    if (isSuccess) {
      navigate("/");
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = () => {
    dispatch(login({ email: email, password: password }));
    dispatch(reset()); // reset auth state
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Admin</h1>
      <form className={classes.form}>
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <TextField
          required
          fullWidth
          type={"email"}
          size={"small"}
          value={email}
          name={"email"}
          label={"Email"}
          onChange={handleOnChange}
          placeholder={"Enter your Email"}
        />
        <label className={classes.label} htmlFor="password">
          Password:
        </label>
        <TextField
          required
          fullWidth
          type={"password"}
          size={"small"}
          value={password}
          name={"password"}
          label={"Password"}
          onChange={handleOnChange}
          placeholder={"Enter your password"}
        />
        {isLoading ? (
          <Button
            disabled
            fullWidth
            variant="contained"
            sx={{ marginTop: 2, height: "40px" }}
          >
            <CircularProgress size={16} />
          </Button>
        ) : (
          <Button
            fullWidth
            disableElevation
            variant="contained"
            onClick={handleSubmit}
            className={classes.button}
          >
            LOGIN
          </Button>
        )}
      </form>
    </div>
  );
};

export default Login;
