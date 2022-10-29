// NODE_MODULES
import { Grid } from "@mui/material";
import CardSkeleton from "./CardSkeleton";

// LOCAL IMPORTS
import SmallBox from "./SmallBox";

const AnalyticsCard = ({mediaQueries, title, subTitle, analytics }) => {
  return (
    <CardSkeleton mediaQueries={mediaQueries} title={title} subTitle={subTitle}>
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
