// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { blue, green, lightGreen, orange } from "@mui/material/colors";
import { useTheme, useMediaQuery } from "@material-ui/core";

// LOCAL IMPORTS
import CardSkeleton from "../CardSkeleton";

const useStyles = makeStyles({
  item: {
    display: "flex",
    alignItems: "center",
    width: 140,
    margin: "11.7px 0",
  },
  items: {
    display: "flex",
  },
  name: {
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: 500,
  },
  unit: {
    fontSize: 14,
  },
  value: {
    borderRadius: 4,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 40,
    height: 40,
  },
});

const Item = ({ index, name, value, valueBg}) => {
  const theme = useTheme();
  const mobileDown = useMediaQuery(theme.breakpoints.down(600));
  const classes = useStyles();

  const inlineStyles = {
    item: {
      width: mobileDown && "100%",
    },
    value: {
      backgroundColor: valueBg,
    },
  };

  return (
    <div className={classes.item} style={inlineStyles.item} key={index}>
      <span className={classes.value} style={inlineStyles.value}>{value}</span>
      <span className={classes.name}>{name}</span>
    </div>
  );
};

const WeeklySales = ({ mediaQueries }) => {
  const theme = useTheme();
  const mobileDown = useMediaQuery(theme.breakpoints.down(600));
  const classes = useStyles();

  const inlineStyles = {
    items: {
      flexDirection: mobileDown && "column",
    },
  };

  return (
    <CardSkeleton
      mediaQueries={mediaQueries}
      title={"Weekly Sales"}
      subTitle={"Total Earning $44.4k"}
      // backgroundColor={"var(--primaryColor)"}
      textColor={"var(--primaryText)"}
    >
      <header className={classes.unit}>In dollar($)</header>
      <div className={classes.items} style={inlineStyles.items}>
        {revenueByCategory.slice(0, 3).map((item, index) => (
          <Item key={index} name={item.name} value={item.value} valueBg={blue[100] + 80} />
        ))}
      </div>
      <div className={classes.items} style={inlineStyles.items}>
        {revenueByCategory.slice(3, 6).map((item, index) => (
          <Item key={index} name={item.name} value={item.value} valueBg={orange[100] + 80} />
        ))}
      </div>
      <div className={classes.items} style={inlineStyles.items}>
        {revenueByCategory.slice(6, 9).map((item, index) => (
          <Item key={index} name={item.name} value={item.value} valueBg={lightGreen[100] + 80} />
        ))}
      </div>
    </CardSkeleton>
  );
};

const revenueByCategory = [
  {
    name: "Fruits",
    value: 12,
  },
  {
    name: "Pulses",
    value: 6,
  },
  {
    name: "Seeds",
    value: 13,
  },
  {
    name: "Vegetables",
    value: 10,
  },
  {
    name: "Spices",
    value: 4,
  },
  {
    name: "Fibres",
    value: 9,
  },
  {
    name: "Broilers",
    value: 12,
  },
  {
    name: "Fishes",
    value: 17,
  },
  {
    name: "Turkey",
    value: 7,
  },
];

export default WeeklySales;
