// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  analyticsCard: {
    backgroundColor: "var(--white)",
    padding: 20,
    borderRadius: 7,
    border: "1px solid var(--primaryBorder)",
    boxShadow: "var(--primaryBoxShadow)",
  },
  subTitle: {
    margin: "0 0 20px 0",
    fontSize: 12,
    color: "var(--lightText)",
  },
  title: {
    color: "var(--primaryText)",
    margin: 0,
  },
});

const CardSkeleton = ({ children, title, subTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.analyticsCard}>
      <div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.subTitle}>{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default CardSkeleton;
