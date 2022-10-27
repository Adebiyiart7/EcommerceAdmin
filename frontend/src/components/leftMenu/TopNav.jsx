// NODE_MODULES
import { GiHamburgerMenu } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  hamburgerMenu: {
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

const TopNav = ({ leftMenuWidth, iconOnly, setIconOnly, setLeftMenuWidth }) => {
  const classes = useStyles();

  const inlineStyles = {
    brandName: {
      display: iconOnly && "none",
    },
    hamburgerMenu: {
      display: iconOnly && "none",
    },
    leftMenuNav: {
      maxWidth: leftMenuWidth,
      minWidth: leftMenuWidth,
    },
  };

  const showIconOnly = () => {
    setIconOnly(!iconOnly);
    setLeftMenuWidth(50)
  };

  return (
    <nav className={classes.leftMenuNav} style={inlineStyles.leftMenuNav}>
      <Link className={classes.brand} to="/">
        <ImStatsBars className={classes.logo} />
        <span className={classes.brandName} style={inlineStyles.brandName}>
          Admin
        </span>
      </Link>
      <IconButton
        className={classes.hamburgerMenu}
        style={inlineStyles.hamburgerMenu}
        onClick={showIconOnly}
      >
        <GiHamburgerMenu />
      </IconButton>
    </nav>
  );
};

export default TopNav;
