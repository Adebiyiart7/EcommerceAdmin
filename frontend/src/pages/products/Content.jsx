// NODE_MODULES
import { IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { IoMdSquareOutline } from "react-icons/io";
import { IoEllipsisHorizontal, IoSearch } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useTheme, useMediaQuery } from "@material-ui/core";

// LOCAL IMPORTS
import PageTitle from "../../components/common/PageTitle";
import AppTable from "../../components/common/Table";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import AddProductModal from "./AddProductModal";
import Button from "../../components/common/Button";

const fields = [
  { name: "selection", alias: "" },
  { name: "name", alias: "Name" },
  { name: "price", alias: "Price (USD)" },
  { name: "available", alias: "Available" },
  { name: "category", alias: "Category" },
  { name: "actions", alias: "Actions" },
];

const createData = (selection, name, price, available, category, actions) => {
  return { selection, name, price, available, category, actions };
};

const CheckBox = () => (
  <IconButton>
    <IoMdSquareOutline size={20} />
  </IconButton>
);

const Actions = () => (
  <IconButton>
    <IoEllipsisHorizontal size={20} />
  </IconButton>
);

const rows = [
  createData(
    <CheckBox />,
    "Sweet oranges, less seed, more liquid",
    29,
    "AVAILABLE",
    "Fruits",
    <Actions />
  ),
  createData(
    <CheckBox />,
    "Carrot",
    43,
    "NOT AVAILABLE",
    "Vegetables",
    <Actions />
  ),
  createData(<CheckBox />, "Rice", 15, "AVAILABLE", "Cereals", <Actions />),
  createData(<CheckBox />, "Beans", 31, "NOT AVAILABLE", "Pulses", <Actions />),
  createData(<CheckBox />, "Walnut", 50, "AVAILABLE", "Seeds", <Actions />),
];

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
  const classes = useStyles();

  const theme = useTheme();
  const { tabletDown, tabletUp } = mediaQueries;
  const [searchInput, setSearchInput] = useState("");
  const media470Down = useMediaQuery(theme.breakpoints.down(470));
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

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
        <AppTable rows={rows} fields={fields} />
      </ContentContainer>
      <Footer />
    </div>
  );
};

export default Content;
