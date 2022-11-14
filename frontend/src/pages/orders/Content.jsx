// NODE_MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IoMdSquareOutline } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

// LOCAL IMPORTS
import PageTitle from "../../components/common/PageTitle";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import AppTable from "../../components/common/Table";
import { getOrders, reset } from "../../features/orders/ordersSlice";

const fields = [
  { name: "orderID", alias: "Order No" },
  { name: "user", alias: "Full Name" },
  { name: "amount", alias: "Amount (USD)" },
  { name: "status", alias: "Status" },
  { name: "date", alias: "Date" },
];

const createData = (orderID, user, amount, status, date) => {
  return { orderID, user, amount, status, date };
};

const useStyles = makeStyles({});

const Content = ({ mediaQueries }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tabletUp } = mediaQueries;
  const { orders, isSuccess, isError, isLoading, message } = useSelector(state => state.orders);

   const inlineStyles = {
    headerContainer: {
      marginBottom: 20,
      display: tabletUp && "flex",
      justifyContent: "space-between",
    },
  };

  useEffect(() => {
    if (isError) console.log(message) // TODO show alert
    
    dispatch(getOrders());

    return () => {
      dispatch(reset());
    }
  }, [dispatch, isError])
  
const rows = [
  createData('#12345', "Adeeyo Joseph Adebiyi", 29, "PAID", "08/02/2022"),
  createData('#12346', "John Smith", 43, "CANCELED", "15/04/2022"),
  createData('#12347', "Emmanuel Tony", 15, "PAID", "18/04/2022"),
  createData('#12348', "Michael James", 31, "CANCELED", "16/06/2022"),
  ]
  
  return (
    <div className={classes.content}>
      <ContentContainer mediaQueries={mediaQueries}>
        <div style={inlineStyles.headerContainer}>
          <PageTitle title="Orders" />
          <AppTable rows={rows} fields={fields} />
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default Content;
