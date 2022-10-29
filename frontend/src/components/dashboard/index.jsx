// NODE_MODULES
import { makeStyles } from "@mui/styles";
import ContentContainer from "../ContentContainer";
import { orange, blue, lightGreen } from "@mui/material/colors";

// LOCAL IMPORTS
import Footer from "../Footer";
import PageTitle from "../common/PageTitle";
import AnalyticsCard from "../common/AnalyticsCard";
import { Grid } from "@mui/material";
import { MdGroups } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import SalesStats from "../common/SalesStats";
import RecentOrder from "../common/RecentOrder";

const useStyles = makeStyles({
  dashboard: {
    // width: "100%"
  },
});

const Dashboard = ({ mediaQueries }) => {
  const classes = useStyles();

  const inlineStyles = {
    scrollView: {
      overflowY: "scroll",
      height: "calc(100vh - 73px)",
    },
  };

  return (
    <div className={classes.dashboard}>
      <div style={inlineStyles.scrollView}>
        <ContentContainer mediaQueries={mediaQueries}>
          <Grid spacing={{ xs: 2, md: 3 }}>
            <PageTitle title="Dashboard" />
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6}>
              <AnalyticsCard
                analytics={analytics.today}
                title={"Today"}
                subTitle={"Profit $15.76k"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AnalyticsCard
                analytics={analytics.yesterday}
                title={"Yesterday"}
                subTitle={"Profit $15.76k"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AnalyticsCard
                analytics={analytics.week}
                title={"Weekly"}
                subTitle={"Profit $15.76k"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AnalyticsCard
                analytics={analytics.allTimes}
                title={"All Times"}
                subTitle={"Profit $15.76k"}
              />
            </Grid>
          </Grid>
          <SalesStats mediaQueries={mediaQueries} />
          {/* <RecentOrder mediaQueries={mediaQueries} /> */}
        </ContentContainer>
        <Footer />
      </div>
    </div>
  );
};

const analytics = {
  today: [
    {
      name: "Orders",
      value: "3,782",
      change: "+29",
      color: blue,
      icon: <BsCreditCard />,
    },
    {
      name: "Revenue",
      value: "$60k",
      change: "+29",
      color: orange,
      icon: <FaRegMoneyBillAlt />,
    },
    {
      name: "Visitors",
      value: "8,636",
      change: "+29",
      color: lightGreen,
      icon: <MdGroups />,
    },
  ],
  yesterday: [
    {
      name: "Orders",
      value: "3,782",
      change: "+29",
      color: blue,
      icon: <BsCreditCard />,
    },
    {
      name: "Revenue",
      value: "$60k",
      change: "+29",
      color: orange,
      icon: <FaRegMoneyBillAlt />,
    },
    {
      name: "Visitors",
      value: "8,636",
      change: "+29",
      color: lightGreen,
      icon: <MdGroups />,
    },
  ],
  week: [
    {
      name: "Orders",
      value: "3,782",
      change: "+29",
      color: blue,
      icon: <BsCreditCard />,
    },
    {
      name: "Revenue",
      value: "$60k",
      change: "+29",
      color: orange,
      icon: <FaRegMoneyBillAlt />,
    },
    {
      name: "Visitors",
      value: "8,636",
      change: "+29",
      color: lightGreen,
      icon: <MdGroups />,
    },
  ],
  allTimes: [
    {
      name: "Orders",
      value: "3,782",
      change: "+29",
      color: blue,
      icon: <BsCreditCard />,
    },
    {
      name: "Revenue",
      value: "$60k",
      change: "+29",
      color: orange,
      icon: <FaRegMoneyBillAlt />,
    },
    {
      name: "Visitors",
      value: "8,636",
      change: "+29",
      color: lightGreen,
      icon: <MdGroups />,
    },
  ],
};

export default Dashboard;
