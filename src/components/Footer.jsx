import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles({

    footer:{
        width:"100%",
        position:"fixed",
        backgroundColor:"#3f51b5",
        height:"40px",
        bottom:"0",
        color:"#fff",
        textAlign:"center",

    }
})
const Footer = () => {
    const classes= useStyles();
    return (
        <div className={classes.footer}>
      Copyright 2021
    </div>
    )
}

export default Footer
