// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { BiNotification } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { IconButton, TextField } from "@mui/material";
// LOCAL IMPORTS
import User from "./User";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const useStyles = makeStyles({
  icon: {
    margin: "0 5px !important",
  },
  input: {
    width: "100% !important",
    marginLeft: "10px !important",
  },
  rightItems: {
    display: "flex",
    alignItems: "center",
  },
  search: {
    display: "flex",
    alignItems: "center",
    width: "70%",
  },
  topNavbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottom: "1px solid var(--primaryBorder)",
    boxShadow: "0 3px 3px 0 var(--boxShadowColor)",
    alignItems: "center",
  },
});

const Navbar = ({
  mediaQueries,
  setLeftMenuWidth,
  showLeftMenu,
  setShowLeftMenu,
}) => {
  const { largeUp, tabletDown, media900Up } = mediaQueries;
  const classes = useStyles();

  const handleShowLeftMenu = () => {
    if (showLeftMenu) {
      setLeftMenuWidth(260);
    }
    
    setShowLeftMenu(!showLeftMenu);
  };

  return (
    <nav className={classes.topNavbar}>
      <div className={classes.search}>
        <IconButton>
          <IoSearch
            className={classes.searchIcon}
            color="var(--primaryColor)"
          />
        </IconButton>
        {largeUp && <TextField
          className={classes.input}
          placeholder="Search anything..."
          type="search"
          size="small"
          fullWidth
        />}
      </div>
      <div className={classes.rightItems}>
        <IconButton className={classes.icon}>
          <BiNotification color="var(--primaryColor)" size={24} />
        </IconButton>
        <IconButton className={classes.icon}>
          <TbMessages color="var(--primaryColor)" size={24} />
        </IconButton>
        {tabletDown && (
          <IconButton onClick={handleShowLeftMenu} className={classes.icon}>
            <GiHamburgerMenu color="var(--primaryColor)" size={24} />
          </IconButton>
        )}
        <User media900Up={media900Up} />
      </div>
    </nav>
  );
};

export default Navbar;
