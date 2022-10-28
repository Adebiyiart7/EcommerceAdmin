// NODE_MODULES
import { makeStyles } from "@mui/styles";
import CardSkeleton from "./CardSkeleton";

// LOCAL IMPORTS

const useStyles = makeStyles({});

const SalesStats = ({ mediaQueries }) => {
  const { tabletDown } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    salesStats: {
      marginTop: tabletDown ? 16  : 24,
    },
  };

  return (
    <div style={inlineStyles.salesStats}>
      <CardSkeleton title={"Sales Stats"}></CardSkeleton>
    </div>
  );
};

export default SalesStats;
