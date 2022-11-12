// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  name: {
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: 150,
  },
    nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "var(--primaryText)",
    fontWeight: 600,
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
  },
});

const User = ({ media900Up }) => {
  const classes = useStyles();
  const { user: current_user } = useSelector((state) => state.auth);
  
  return (
    <div className={classes.user}>
      <Avatar
        sx={{ width: 35, height: 35, backgroundColor: "var(--primaryColor)" }}
      />
      {media900Up && (
        <div className={classes.details}>
          <span className={classes.permission}>Admin</span>
          <span className={classes.nameContainer}>
           <span className={classes.name}>{`${current_user.first_name} ${current_user.last_name}`}</span>
            <BiChevronDown size={24} />
          </span>
        </div>
      )}
    </div>
  );
};

export default User;
