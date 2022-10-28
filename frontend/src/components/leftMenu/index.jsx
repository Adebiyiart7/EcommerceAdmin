// NODE_MODULES
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { VscDashboard } from "react-icons/vsc";
import { MdOutlineAnalytics, MdOutlinePeopleAlt } from "react-icons/md";
import { TbFileInvoice, TbMessages } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

// LOCAL IMPORTS
import TopNav from "./TopNav";
import MenuItem from "../common/MenuItem";
import customScrollBar from "../../utilities/customScrollBar";

const useStyles = makeStyles({
  leftMenu: customScrollBar(),
  menuItems: {
    marginTop: 70,
  },
  menuLink: {
    textDecoration: "none",
  },
});

const LeftMenu = () => {
  const [iconOnly, setIconOnly] = useState(false);
  const [leftMenuWidth, setLeftMenuWidth] = useState(260);
  const classes = useStyles();

  const showDetailedLeftMenu = () => {
    setIconOnly(false);
    setLeftMenuWidth(260);
  };

  const inlineStyles = {
    leftMenu: {
      minWidth: leftMenuWidth,
      height: "100vh",
      // overflowY: "scroll",
      padding: 16,
      boxShadow: "3px 0px 3px 0px var(--boxShadowColor)",
      borderRight: "1px solid var(--primaryBorder)",
    },
  };

  return (
    <div
      className={classes.leftMenu}
      style={inlineStyles.leftMenu}
      onMouseOver={showDetailedLeftMenu}
    >
      <TopNav
        setLeftMenuWidth={setLeftMenuWidth}
        leftMenuWidth={leftMenuWidth}
        iconOnly={iconOnly}
        setIconOnly={setIconOnly}
      />
      <div className={classes.menuItems}>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<VscDashboard />}
            iconOnly={iconOnly}
            title={"Dashboard"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<MdOutlineAnalytics />}
            iconOnly={iconOnly}
            title={"Analytics"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<BsCreditCard />}
            iconOnly={iconOnly}
            title={"Orders"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<IoAnalytics />}
            iconOnly={iconOnly}
            title={"Sales"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<MdOutlinePeopleAlt />}
            iconOnly={iconOnly}
            title={"Users"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<FaRegListAlt />}
            iconOnly={iconOnly}
            title={"Products"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<TfiEmail />}
            iconOnly={iconOnly}
            title={"Email"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<TbMessages />}
            iconOnly={iconOnly}
            title={"Messages"}
          />
        </Link>
        <Link className={classes.menuLink} to="/">
          <MenuItem
            leftIcon={<TbFileInvoice />}
            iconOnly={iconOnly}
            title={"Invoice"}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
