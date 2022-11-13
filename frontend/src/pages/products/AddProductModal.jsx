// NODE_MODULES
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  Grid,
  IconButton,
  Input,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { FaCamera } from "react-icons/fa";
import { Formik } from "formik";

// LOCAL IMPORTS
import AppButton from "../../components/common/Button";
import AppTextInput from "../../components/common/form/AppTextInput";

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
  label: {
    display: "block",
    fontWeight: 500,
    marginBottom: 3,
    fontFamily: "'Inter', serif",
    color: "var(--primaryText)",
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  price: Yup.string().required().label("Price"),
  category: Yup.string().required().label("Category"),
  subCategory: Yup.string().label("Sub Category"),
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

  const inlineStyles = {
    dialogContent: {
      padding: largeUp ? "5px 32px" : "5px 16px",
    },
  };

  return (
    <Dialog open={openAddProductModal} onClose={handleClose} scroll={"body"}>
      <DialogContent style={inlineStyles.dialogContent}>
        <h3 className={classes.dialogTitle}>Add Product</h3>
        <Formik
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
            // dispatch
            console.log(JSON.stringify(values));
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <form onSubmit={handleSubmit}>
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
                    labelStyles={classes.label}
                    autoFocus
                    type="text"
                    name="name"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextInput
                    labelStyles={classes.label}
                    type="text"
                    name="price"
                    label="Price"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <label className={classes.label} htmlFor="category">
                      Category *
                    </label>
                    <Select
                      required
                      type="text"
                      name="category"
                      value={values.category}
                      onChange={handleChange("category")}
                    >
                      <MenuItem value="Fruits">Fruits</MenuItem>
                      <MenuItem value="Pulses">Pulses</MenuItem>
                      <MenuItem value="Seeds">Seeds</MenuItem>
                      <MenuItem value="Vegetables">Vegetables</MenuItem>
                      <MenuItem value="Spices">Spices</MenuItem>
                      <MenuItem value="Fibres">Fibres</MenuItem>
                      <MenuItem value="Broilers">Broilers</MenuItem>
                      <MenuItem value="Fishes">Fishes</MenuItem>
                      <MenuItem value="Turkey">Turkey</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <label className={classes.label} htmlFor="category">
                      Sub Category
                    </label>
                    <Select
                      required
                      type="text"
                      name="subCategory"
                      value={values.subCategory}
                      onChange={handleChange("subCategory")}
                    >
                      <MenuItem value="Option1">Option1</MenuItem>
                      <MenuItem value="Option2">Option2</MenuItem>
                      <MenuItem value="Option3">Option3</MenuItem>
                      <MenuItem value="Option4">Option4</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <AppTextInput
                    labelStyles={classes.label}
                    multiline
                    type="text"
                    minRows={4}
                    name="description"
                    label="Desciption"
                  />
                </Grid>
                {/* <Grid item xs={12}>
              <MdCheckBox size={24} color={colors.blue[700]} />
              <span>Available</span>
            </Grid> */}
              </Grid>
              <DialogActions sx={{ padding: largeUp ? "32px 0" : "16px 0" }}>
                <AppButton
                  variant="contained"
                  color={"inherit"}
                  onClick={handleClose}
                  title={"Cancel"}
                  sx={{
                    color: "Var(--primaryText)",
                    textTransform: "capitalize",
                  }}
                />
                <AppButton
                  className={classes.addButton}
                  variant="contained"
                  title={"Add"}
                  type={"submit"}
                />
              </DialogActions>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
