// NODE_MODULE
import { useContext } from "react";

//LOCAL IMPORTS
import { AppContext } from "../../App";
import Dashboard from "../../components/dashboard";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const { mediaQueries } = useContext(AppContext);

  return (
    <Layout
      mediaQueries={mediaQueries}
      content={<Dashboard mediaQueries={mediaQueries} />}
    />
  );
};

export default Home;
