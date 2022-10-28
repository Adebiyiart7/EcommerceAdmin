// NODE_MODULE
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";

const useStyles = makeStyles({
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 16,
  },
  name: {
    color: "var(--lightText)",
    fontSize: 14,
  },
  smallBox: {
    display: "flex",
    flexDirection: "row",
  },
  value: {
    color: "var(--primaryText)",
    fontSize: 22,
    fontWeight: 600,
  },
});

const SmallBox = ({ value, name, change, icon, color }) => {
  const classes = useStyles();

  const inlineStyles = {
    change: {
      color: color[700],
      fontWeight: 500,
      fontSize: 12,
    },
  };

  return (
    <div className={classes.smallBox}>
      <Avatar
        sx={{ bgcolor: color[50], color: color[700] }}
        children={icon}
        variant="rounded"
      />
      <div className={classes.details}>
        <span className={classes.value}>
          {value}
          <sup style={inlineStyles.change}>{change}</sup>
        </span>
        <span className={classes.name}>{name}</span>
      </div>
    </div>
  );
};

export default SmallBox;
