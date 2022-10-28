// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentContainer: {
    padding: 30,
    backgroundColor: "var(--lightBackground)",
  }
})

const ContentContainer = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>{children}</div>
  )
}

export default ContentContainer