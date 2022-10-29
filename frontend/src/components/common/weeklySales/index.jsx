// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import CardSkeleton from "../CardSkeleton";

const useStyles = makeStyles({
  item: {},
  items: {
    display: "flex",
  },
  name: {},
  value: {},
});

const Item = ({ index, name, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.item} key={index}>
      <span className={classes.value}>{value}</span>
      <span className={classes.name}>{name}</span>
    </div>
  );
};

const WeeklySales = ({ mediaQueries }) => {
  const classes = useStyles();
  return (
    <CardSkeleton
      mediaQueries={mediaQueries}
      title={"Weekly Sales"}
      subTitle={"Total Earning $44.4k"}
      backgroundColor={"var(--primaryColor)"}
      textColor={"var(--white)"}
    >
      <div className={classes.items}>
        {revenueByCategory.slice(0, 3).map((item, index) => (
          <Item key={index} name={item.name} value={item.value} />
        ))}
      </div>
      <div className={classes.items}>
        {revenueByCategory.slice(3, 6).map((item, index) => (
          <Item key={index} name={item.name} value={item.value} />
        ))}
      </div>
    </CardSkeleton>
  );
};

const revenueByCategory = [
  {
    name: "Category1",
    value: 12,
  },
  {
    name: "Category2",
    value: 6,
  },
  {
    name: "Category3",
    value: 13,
  },
  {
    name: "Category4",
    value: 10,
  },
  {
    name: "Category5",
    value: 4,
  },
  {
    name: "Category6",
    value: 9,
  },
  {
    name: "Category7",
    value: 12,
  },
  {
    name: "Category8",
    value: 17,
  },
  {
    name: "Category9",
    value: 7,
  },
];

export default WeeklySales;
