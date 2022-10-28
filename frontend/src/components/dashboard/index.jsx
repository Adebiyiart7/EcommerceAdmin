// NODE_MODULES
import { makeStyles } from "@mui/styles";
import ContentContainer from "../ContentContainer";

// LOCAL IMPORTS
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import PageTitle from "../common/PageTitle";
import AnalyticsCard from "../common/AnalyticsCard";

const useStyles = makeStyles({
  dashboard: {
    // width: "100%"
  },
});

const Dashboard = () => {
  const classes = useStyles();

  const inlineStyles = {
    scrollView: {
      overflowY: "scroll",
      height: "calc(100vh - 73px)",
    },
  };

  return (
    <div className={classes.dashboard}>
      <Navbar />
      <div style={inlineStyles.scrollView}>
        <ContentContainer>
          <PageTitle title="Dashboard" />
         <AnalyticsCard />
        </ContentContainer>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
