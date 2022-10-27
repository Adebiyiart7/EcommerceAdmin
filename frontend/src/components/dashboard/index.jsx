// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dashboard: {
    // width: "100%"
  }
})

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>Dashboard</div>
  )
}

export default Dashboard