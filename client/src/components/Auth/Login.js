import React from "react";
import { withStyles } from "@material-ui/core/styles";

const Login = ({ classes }) => {
  return <div>Login</div>;
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default withStyles(styles)(Login);
