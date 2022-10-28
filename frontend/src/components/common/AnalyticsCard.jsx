// NODE_MODULES
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import SmallBox from "./SmallBox";

const useStyles = makeStyles({
  analyticsCard: {
    backgroundColor: "var(--white)",
    padding: 16,
    borderRadius: 7,
    border: "1px solid var(--primaryBorder)",
    boxShadow: "var(--primaryBoxShadow)",
  },
  subTitle: {
    marginTop: 0,
    fontSize: 12,
    color: "var(--lightText)",
  },
  title: {
    color: "var(--primaryText)",
    margin: 0,
  },
});

const AnalyticsCard = ({ title, subTitle, analytics }) => {
  const classes = useStyles();

  return (
    <div className={classes.analyticsCard}>
      <h3 className={classes.title}>{title}</h3>
      {subTitle && <p className={classes.subTitle}>{subTitle}</p>}
      <Grid
        sx={{ display: "flex", justifyContent: "space-between" }}
        rowSpacing={3}
        spacing={0.5}
        container
      >
        {analytics.map((item, index) => (
          <Grid item key={index}>
            <SmallBox
              name={item.name}
              value={item.value}
              change={item.change}
              icon={item.icon}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AnalyticsCard;
