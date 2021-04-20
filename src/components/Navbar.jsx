import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12
  },
  link:{
    textDecoration: 'none',
    color:"#ffffff"
  }
});

const Navbar= ()=> {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="" color="inherit">
        <Link className={classes.link}  to="/">Phonebook</Link>
            
        </Typography>

        <section className={classes.rightToolbar}>
          <IconButton color="inherit" aria-label="Add">
          <Link className={classes.link} to="/add"><EditIcon /></Link>
            
          </IconButton>
          
        </section>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar