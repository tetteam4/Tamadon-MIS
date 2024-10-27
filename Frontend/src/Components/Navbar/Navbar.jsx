import { Button, Typography, AppBar, Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  leftNav: {
    marginRight: "auto",
  },
  rightNav: {
    marginLeft: "auto",
    marginRight: "6rem",
  },

  AddPro: {
    backgroundColor: "#FFE700",
    color: "black",
    width: "15rem",
    fontSize: "1.1rem",
    marginRight: "1rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#FFF100",
    },
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#088395" }}>
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit">
              <Typography variant="h4">Tamadon</Typography>
            </Button>
          </div>
          <div>
            <Button color="inherit" style={{ marginRight: "2rem" }}>
              <Typography variant="h6">Home</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="h6" style={{ marginLeft: "2rem" }}>
                About
              </Typography>
            </Button>
          </div>
          <div className={classes.rightNav}>
            <Button color="inherit">
              <Typography variant="h6" className={classes.logBtn}>
                Login
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
