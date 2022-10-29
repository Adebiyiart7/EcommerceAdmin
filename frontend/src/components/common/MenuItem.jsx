// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  leftIcon: {
    position: "relative",
    top: 9,
    fontSize: 30,
  },
  menuItem: {
    borderRadius: 4,
    margin: "10px 0",
    padding: "2px 12px 10px 12px",
    fontWeight: 500,
    fontSize: 16,
    color: "var(--primaryText)",
    backgroundColor: "var(--lightBackground)",
    "&:hover": {
      color: "var(--white) !important",
      backgroundColor: "var(--primaryColor)",
    },
  },
});

const MenuItem = ({ leftIcon, title, rightIcon, iconOnly }) => {
  const classes = useStyles();

  const inlineStyles = {
    leftIcon: {
      marginRight: iconOnly ? 0 : 10,
    },
    rightIcon: {
      display: iconOnly && "none",
    },
    title: {
      display: iconOnly && "none",
    },
  };

  return (
    <div className={classes.menuItem}>
      <span className={classes.leftIcon} style={inlineStyles.leftIcon}>
        {leftIcon}
      </span>
      <span style={inlineStyles.title}>{title}</span>
      <span style={inlineStyles.rightIcon}>{rightIcon}</span>
    </div>
  );
};

export default MenuItem;
