// NODE_MODULE
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";

// LOCAL IMPORT
import LeftMenu from "../leftMenu";
import Navbar from "../navbar/Navbar";

const useStyles = makeStyles({
  layout: {
    display: "flex",
  },
  mainContent: {
    width: "100%",
  },
});

const Layout = ({ mediaQueries, content }) => {
  const { tabletDown } = mediaQueries;
  const [iconOnly, setIconOnly] = useState(false);
  const [leftMenuWidth, setLeftMenuWidth] = useState(260);
  const [showLeftMenu, setShowLeftMenu] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    if (tabletDown) {
      setShowLeftMenu(false);
    }
  }, [tabletDown]);

  return (
    <div className={classes.layout}>
      {showLeftMenu && (
        <LeftMenu
          iconOnly={iconOnly}
          setIconOnly={setIconOnly}
          leftMenuWidth={leftMenuWidth}
          setLeftMenuWidth={setLeftMenuWidth}
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
          mediaQueries={mediaQueries}
        />
      )}
      <main className={classes.mainContent}>
        <Navbar
          iconOnly={iconOnly}
          setIconOnly={setIconOnly}
          setLeftMenuWidth={setLeftMenuWidth}
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
          mediaQueries={mediaQueries}
        />
        {content}
      </main>
    </div>
  );
};

export default Layout;
