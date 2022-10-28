// NODE_MODULES
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentContainer: {
    backgroundColor: "var(--lightBackground)",
  },
});

const ContentContainer = ({ children, mediaQueries }) => {
  const { largeDown } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    container: {
      padding: largeDown && 0
    },
    contentContainer: {
      padding: largeDown ? 16 : 30,
    },
  };

  return (
    <div
      className={classes.contentContainer}
      style={inlineStyles.contentContainer}
    >
      <Container sx={inlineStyles.container}>{children}</Container>
    </div>
  );
};

export default ContentContainer;
