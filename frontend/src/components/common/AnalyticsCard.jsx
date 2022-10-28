// NODE_MODULES
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardSkeleton from "./CardSkeleton";

// LOCAL IMPORTS
import SmallBox from "./SmallBox";

const useStyles = makeStyles({
  analyticsCard: {
    backgroundColor: "var(--white)",
    padding: 20,
    borderRadius: 7,
    border: "1px solid var(--primaryBorder)",
    boxShadow: "var(--primaryBoxShadow)",
  },
});

const AnalyticsCard = ({ title, subTitle, analytics }) => {
  const classes = useStyles();

  return (
    <CardSkeleton title={title} subTitle={subTitle}>
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
    </CardSkeleton>
  );
};

export default AnalyticsCard;
