// NODE_MODULES
import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

// LOCAL IMPORTS
import PageTitle from "../../components/common/PageTitle";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import AppTable from "../../components/common/Table";
import { getOrders, reset } from "../../features/orders/ordersSlice";
import { colors } from "@mui/material";

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

const useStyles = makeStyles({
  link: {
    color: colors.blue[700],
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  tableContainer: {
    marginTop: 20,
  },
});

const Content = ({ mediaQueries }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tabletUp } = mediaQueries;
  const { orders, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.orders
  );

  const inlineStyles = {
    headerContainer: {
      marginBottom: 20,
    },
  };

  useEffect(() => {
    if (isError) console.log(message); // TODO show alert

    dispatch(getOrders());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message]);

  const rows = [];

  for (let order of orders) {
    rows.push(
      createData(
        <Link className={classes.link} to="/order:id">
          #{order.orderID}
        </Link>,
        `${order.first_name} ${order.last_name}`,
        order.amount,
        <span style={{ textDecoration: "uppercase" }}>{order.status}</span>,
        format(parseISO(order.createdAt), "dd/MM/yyyy")
      )
    );
  }

  return (
    <div className={classes.content}>
      <ContentContainer mediaQueries={mediaQueries}>
        <div style={inlineStyles.headerContainer}>
          <div>
            <PageTitle title="Orders" />
          </div>
          <div className={classes.tableContainer}>
            <AppTable rows={rows} fields={fields} />
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default Content;
