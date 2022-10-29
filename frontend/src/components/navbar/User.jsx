// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";

const useStyles = makeStyles({
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  name: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "var(--primaryText)",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  permission: {
    fontWeight: 500,
    fontSize: 14,
    color: "var(--secondaryColor)",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 5,
    cursor: "pointer",
    // width: 185,
  },
  
})

const User = ({media900Up}) => {
  const classes = useStyles();

  return (
    <div className={classes.user}>
      <Avatar sx={{width: 35, height: 35, backgroundColor:"var(--primaryColor)"}} />
     {media900Up && <div className={classes.details}>
        <span className={classes.permission}>Admin</span>
        <span className={classes.name}>Joseph Adeeyo <BiChevronDown size={20} /></span>
      </div>}
    </div>
  );
};

export default User;
