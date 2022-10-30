// NODE_MODULES
import { MdGroups, MdOutlinePeopleAlt } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { makeStyles } from "@mui/styles";
import ContentContainer from "../ContentContainer";
import { orange, blue, lightGreen } from "@mui/material/colors";

// LOCAL IMPORTS
import Footer from "../Footer";
import PageTitle from "../common/PageTitle";
import AnalyticsCard from "../common/AnalyticsCard";
import SalesStats from "../common/SalesStats";
import RecentOrder from "../common/RecentOrder";
import NewUsers from "../common/NewUsers";
import WeeklySales from "../common/weeklySales";
import { IoAnalytics } from "react-icons/io5";

const useStyles = makeStyles({
  dashboard: {
    // width: "100%"
  },
});

const Dashboard = ({ mediaQueries }) => {
  const { tabletUp } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    basicAnalytics: {
      display: "flex",
      flex: 1,
      flexDirection: tabletUp ? "row" : "column",
    },
    scrollView: {
      overflowY: "scroll",
      height: "calc(100vh - 73px)",
    },
  };

  return (
    <div className={classes.dashboard}>
      <div style={inlineStyles.scrollView}>
        <ContentContainer mediaQueries={mediaQueries}>
          <PageTitle title="Dashboard" />
          <div style={inlineStyles.basicAnalytics}>
            <div style={{ flex: .5}}>
              <WeeklySales mediaQueries={mediaQueries} />
            </div>
            <div style={{ flex: .5, marginLeft: tabletUp && 24  }}>
              <AnalyticsCard
                mediaQueries={mediaQueries}
                analytics={analytics.orders}
                title={"Sales"}
                subTitle={"Last 24hrs"}
              />
              <AnalyticsCard
                mediaQueries={mediaQueries}
                analytics={analytics.users}
                title={"Users"}
                subTitle={"Last 7 days"}
              />
            </div>
          </div>
          <SalesStats mediaQueries={mediaQueries} />
          <RecentOrder mediaQueries={mediaQueries} />
          <NewUsers mediaQueries={mediaQueries} />
        </ContentContainer>
        <Footer />
      </div>
    </div>
  );
};

const analytics = {
  orders: [
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
      name: "Profit",
      value: "$15k",
      change: "+29",
      color: lightGreen,
      icon: <IoAnalytics />,
    },
  ],
  users: [
    {
      name: "Total Users",
      value: "3,782",
      change: "+29",
      color: blue,
      icon: <MdOutlinePeopleAlt />,
    },
    {
      name: "New",
      value: "$60k",
      change: "+29",
      color: orange,
      icon: <MdOutlinePeopleAlt />,
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
