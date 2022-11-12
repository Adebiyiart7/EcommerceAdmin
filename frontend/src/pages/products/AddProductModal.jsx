// NODE_MODULES
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Grid, IconButton, Input } from "@mui/material";

// LOCAL IMPORTS
import AppButton from "../../components/common/Button";
import AppTextInput from "../../components/common/form/AppTextInput";
import AppForm from "../../components/common/form/AppForm";
import { FaCamera } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
import { colors } from "@material-ui/core";

const useStyles = makeStyles({
  addButton: {
    textTransform: "capitalize !important",
    backgroundColor: "var(--primaryColor) !important",
  },
  dialogTitle: {
    fontSize: 22,
    fontWeight: "600 !important",
    color: "var(--primaryText)",
    paddingBottom: "0px !important",
    fontFamily: "'Inter', serif !important",
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  price: Yup.string().required().label("Price"),
  category: Yup.string().required().label("Category"),
  subCategory: Yup.string().required().label("Sub Category"),
  description: Yup.string().required().label("Description"),
});

const AddProductModal = ({
  mediaQueries,
  openAddProductModal,
  setOpenAddProductModal,
}) => {
  const classes = useStyles();
  const { largeUp } = mediaQueries;

  const handleClose = () => {
    setOpenAddProductModal(false);
  };

  const handleSubmit = (values) => {
    // dispatch
    console.log(values);
  };

  const inlineStyles = {
    dialogContent: {
      padding: largeUp ? "5px 32px" : "5px 16px",
    },
  };

  return (
    <Dialog open={openAddProductModal} onClose={handleClose} scroll={"body"}>
      <DialogContent style={inlineStyles.dialogContent}>
        <h3 className={classes.dialogTitle}>Add Product</h3>
        <AppForm
          initialValues={{
            name: "",
            price: "",
            category: "",
            subCategory: "",
            // images: [],
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <IconButton>
                <label htmlFor="images">
                  <Input
                    sx={{ width: 0 }}
                    // onChange={handleImageUpload}
                    name="images"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    id="images"
                    type="file"
                    inputProps={{
                      multiple: true,
                    }}
                  />
                  <FaCamera size={24} />
                </label>
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                autoFocus
                type="text"
                name="name"
                label="Name"
                placeholder="Item name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                type="text"
                name="price"
                label="Price"
                placeholder="Price"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                type="text"
                name="category"
                label="Category"
                placeholder="Category"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                type="text"
                name="subCategory"
                label="Sub Category"
                placeholder="Sub Category"
              />
            </Grid>
            <Grid item xs={12}>
              <AppTextInput
                multiline
                type="text"
                minRows={4}
                name="description"
                label="Desciption"
                placeholder="Desciption"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <MdCheckBox size={24} color={colors.blue[700]} />
              <span>Available</span>
            </Grid> */}
          </Grid>
        </AppForm>
      </DialogContent>
      <DialogActions sx={{ padding: largeUp ? "32px" : "16px" }}>
        <AppButton
          variant="contained"
          color={"inherit"}
          onClick={handleClose}
          title={"Cancel"}
          sx={{ color: "Var(--primaryText)", textTransform: "capitalize" }}
        />
        <AppButton
          className={classes.addButton}
          variant="contained"
          title={"Add"}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddProductModal;
