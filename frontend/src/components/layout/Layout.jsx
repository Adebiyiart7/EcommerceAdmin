// NODE_MODULE
import { makeStyles } from "@mui/styles";

// LOCAL IMPORT
import LeftMenu from "../leftMenu";

const useStyles = makeStyles({
  layout: {
    display: "flex",
  },
  mainContent: {
    width: "100%",
  },
});

const Layout = ({ mediaQueries, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <LeftMenu />
      <main className={classes.mainContent}>{content}</main>
    </div>
  );
};

export default Layout;
