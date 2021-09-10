import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#FFF",
  },
  description: {
    color: "#FFF",
    marginTop: "48px",
  },
}));

export const Hero = ({ title, description }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        textAlign: "center",
        paddingTop: "7%",
        color: "#FFF",
      }}
    >
      <Hidden smDown>{title}</Hidden>
      <div className={classes.description}>{description}</div>
    </div>
  );
};
