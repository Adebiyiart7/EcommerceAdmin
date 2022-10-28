// NODE_MODULES
import { ImStatsBars } from "react-icons/im";
import { makeStyles } from "@mui/styles";
import { FaArrowLeft } from "react-icons/fa";
import { IconButton } from "@mui/material";
// import { IconButton } from "@material-ui/core";
// import { FaArrowLeft } from "react-icons/fa";

const useStyles = makeStyles({
  brand: {
    textDecoration: "none",
  },
  brandName: {
    color: "var(--primaryColor)",
    fontWeight: 900,
    fontSize: 30,
    position: "relative",
    bottom: 10,
    left: 7,
  },
  leftArrow: {
    position: "relative",
    bottom: 3,
    right: 0,
  },
  leftMenuNav: {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "var(--white)",
    padding: "16px 0px 5px 0px",
    zIndex: "var(--zIndex1)",
  },
  logo: {
    color: "var(--white)",
    padding: 10,
    fontSize: 30,
    borderRadius: 4,
    backgroundColor: "var(--primaryColor)",
    left: 0,
  },
});

const TopNav = ({
  mediaQueries,
  leftMenuWidth,
  iconOnly,
  // setIconOnly,
  // setLeftMenuWidth,
  setShowLeftMenu,
}) => {
  const {tabletDown} = mediaQueries
  const classes = useStyles();

  const inlineStyles = {
    brandName: {
      display: iconOnly && "none",
    },
    leftArrow: {
      display: iconOnly && "none",
    },
    leftMenuNav: {
      maxWidth: leftMenuWidth,
      minWidth: leftMenuWidth,
    },
  };

  // const showIconOnly = () => {
  //   if (tabletDown) {
  //     setShowLeftMenu(false);
  //   } else {
  //     setIconOnly(!iconOnly);
  //     setLeftMenuWidth(50);
  //   }
  // };

  const showLeftMenu = () => setShowLeftMenu(false);

  return (
    <nav className={classes.leftMenuNav} style={inlineStyles.leftMenuNav}>
      <div className={classes.brand}>
        <ImStatsBars className={classes.logo} />
        <span className={classes.brandName} style={inlineStyles.brandName}>
          Admin
        </span>
      </div>
      {tabletDown && <IconButton
        className={classes.leftArrow}
        style={inlineStyles.leftArrow}
        onClick={showLeftMenu}
      >
        <FaArrowLeft color="var(--primaryColor)"/>
      </IconButton>}
    </nav>
  );
};

export default TopNav;
