import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Searchright() {
  const classes = useStyles();
  return (
    <div>
      <Button size="small" className={classes.margin}>
        React
      </Button>
      <Button size="small" className={classes.margin}>
        Programming
      </Button>
      <Button size="small" className={classes.margin}>
        Javascript
      </Button>
      <Button size="small" className={classes.margin}>
        Web Development
      </Button>
      <Button size="small" className={classes.margin}>
        Redux
      </Button>
      <Button size="small" className={classes.margin}>
        Angular
      </Button>
      <Button size="small" className={classes.margin}>
        Good
      </Button>
      <Button size="small" className={classes.margin}>
        Tesla
      </Button>
    </div>
  );
}

export default Searchright;
