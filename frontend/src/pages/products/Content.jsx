// NODE_MODULES
import { IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { IoMdSquareOutline } from "react-icons/io";
import { IoEllipsisHorizontal, IoSearch } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

// LOCAL IMPORTS
import PageTitle from "../../components/common/PageTitle";
import AppTable from "../../components/common/Table";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import AddProductModal from "./AddProductModal";
import Button from "../../components/common/Button";
import { getProducts, reset } from "../../features/products/productsSlice";

const CheckBox = ({ color }) => (
  <IconButton>
    <IoMdSquareOutline color={color} size={20} />
  </IconButton>
);

const Actions = ({ color }) => (
  <IconButton>
    <IoEllipsisHorizontal color={color} size={20} />
  </IconButton>
);

const fields = [
  { name: "selection", alias: <CheckBox color={"var(--white)"} /> },
  { name: "name", alias: "Name" },
  { name: "price", alias: "Price (USD)" },
  { name: "available", alias: "Available" },
  { name: "category", alias: "Category" },
  { name: "actions", alias: <Actions color={"var(--white)"} /> },
];

const createData = (selection, name, price, available, category, actions) => {
  return { selection, name, price, available, category, actions };
};

const useStyles = makeStyles({
  addButton: {
    textTransform: "capitalize !important",
    fontSize: "17px !important",
    backgroundColor: "var(--primaryColor) !important",
  },
  right: {
    display: "flex",
  },
  searchBox: {
    position: "relative",
    marginRight: 16,
  },
  searchInput: {
    height: 41.75,
  },
});

const Content = ({ mediaQueries }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tabletDown, tabletUp } = mediaQueries;
  const [searchInput, setSearchInput] = useState("");
  const media470Down = useMediaQuery(theme.breakpoints.down(470));
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  const { isLoading, isError, message, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isError) {
      console.log(message); // TODO log message in an alert window
    }
    dispatch(getProducts(window.location.search));

    return () => dispatch(reset());
  }, [dispatch, isError, message]);

  const rows = [];
  for (let item of products) {
    
    rows.push(
      createData(
        <CheckBox />,
        item.name,
        item.price,
        item.available === true ? "AVAILABLE" : "NOT AVAILABLE",
        item.category,
        <Actions />
      )
    );
  }

  const handleOnChange = (e) => setSearchInput(e.target.value);

  const handleAddproduct = () => setOpenAddProductModal(true);

  const inlineStyles = {
    headerContainer: {
      marginBottom: 20,
      display: tabletUp && "flex",
      justifyContent: "space-between",
    },
    right: {
      marginTop: tabletDown && 16,
    },
  };

  return (
    <div className={classes.productsContent}>
      <AddProductModal
        mediaQueries={mediaQueries}
        openAddProductModal={openAddProductModal}
        setOpenAddProductModal={setOpenAddProductModal}
      />
      <ContentContainer mediaQueries={mediaQueries}>
        <div style={inlineStyles.headerContainer}>
          <PageTitle title="Products" />
          <div className={classes.right} style={inlineStyles.right}>
            <div className={classes.searchBox}>
              {media470Down ? (
                <Button
                  sx={{ height: 41.75 }}
                  color="inherit"
                  disableElevation
                  variant="contained"
                  title={<IoSearch color="var(--primaryText)" size={24} />}
                />
              ) : (
                <TextField
                  fullWidth
                  size="small"
                  name="search"
                  type={"search"}
                  value={searchInput}
                  className={classes.searchInput}
                  onChange={handleOnChange}
                  placeholder="Search Product..."
                />
              )}
            </div>
            <Button
              startIcon={<MdAdd size={24} />}
              variant="contained"
              disableElevation
              onClick={handleAddproduct}
              className={classes.addButton}
              title={"Add Product"}
            />
          </div>
        </div>
        {products.length > 0 ? (
          isLoading ? (
            <p>Loading...</p> // TODO Show loading component
          ) : (
            <AppTable rows={rows} fields={fields} />
          )
        ) : (
          //TODO create an info container to diplay info
          <p>No products to show</p>
        )}
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default Content;
