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

const CardSkeleton = ({
  mediaQueries,
  children,
  title,
  subTitle,
  backgroundColor,
  textColor,
}) => {
  const { tabletDown } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    analyticsCard: {
      marginTop: tabletDown ? 16 : 24,
      backgroundColor: backgroundColor,
       color: textColor && textColor,
    },
    subTitle: {
      color: textColor && textColor,
    },
    title: {
      color: textColor && textColor,
    },
  };

  return (
    <div className={classes.analyticsCard} style={inlineStyles.analyticsCard}>
      <div>
        <h3 className={classes.title} style={inlineStyles.title}>{title}</h3>
        <p className={classes.subTitle} style={inlineStyles.subTitle}>{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default CardSkeleton;
