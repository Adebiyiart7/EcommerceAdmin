// NODE_MODULE
import { useContext } from "react";

//LOCAL IMPORTS
import { AppContext } from "../../App";
import Layout from "../../components/layout/Layout";
import Content from "./Content";

const Products = () => {
  const { mediaQueries } = useContext(AppContext);

  return (
    <Layout
      mediaQueries={mediaQueries}
      content={<Content mediaQueries={mediaQueries} />}
    />
  );
};

export default Products;
