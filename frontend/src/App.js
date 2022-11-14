// NODE_MODULES
import { createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";

// LOCAL IMPORTS
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import { useSelector } from "react-redux";
import Products from "./pages/products";
import Orders from "./pages/orders";

export const AppContext = createContext();

function App() {
  const theme = useTheme();
  const mediaQueries = {
    smallDown: useMediaQuery(theme.breakpoints.down(320)),
    mediumDown: useMediaQuery(theme.breakpoints.down(375)),
    largeDown: useMediaQuery(theme.breakpoints.down(425)),
    tabletDown: useMediaQuery(theme.breakpoints.down(768)),
    media900Down: useMediaQuery(theme.breakpoints.down(900)),
    laptopDown: useMediaQuery(theme.breakpoints.down(1024)),
    laptopLargeDown: useMediaQuery(theme.breakpoints.down(1440)),

    smallUp: useMediaQuery(theme.breakpoints.up(320)),
    mediumUp: useMediaQuery(theme.breakpoints.up(375)),
    largeUp: useMediaQuery(theme.breakpoints.up(425)),
    tabletUp: useMediaQuery(theme.breakpoints.up(768)),
    media900Up: useMediaQuery(theme.breakpoints.up(900)),
    laptopUp: useMediaQuery(theme.breakpoints.up(1024)),
    laptopLargeUp: useMediaQuery(theme.breakpoints.up(1440)),
  };

  const contextValue = {
    mediaQueries,
  };

  const { user } = useSelector((state) => state.auth);

  const privateElement = (element) => {
    if (user) {
      if (user.isAdmin || user.isSuperAdmin) {
        return element;
      } else {
        return <Navigate to={"/login"} />;
      }
    } else {
      return <Navigate to={"/login"} />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={privateElement(<Home />)} />
          <Route path="/products" element={privateElement(<Products />)} />
          <Route path="/orders" element={privateElement(<Orders />)} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
