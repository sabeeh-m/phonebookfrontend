import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { FormControl,InputLabel,Input,Select,MenuItem,FormHelperText,makeStyles, Typography,Grid,Button } from '@material-ui/core';
import constants from '../constants'
const useStyles= makeStyles({
    mainDiv:{
        display:"flex",
        // justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        // alignContent:"center",
        width:"100%",
        marginTop:"auto",
        marginBottom:"auto"
        
    },
    errorMsg:{
        color:"red",
        width:"100%",
        textAlign:"center"
    },
    formHeading:{
      paddingTop:"20px"
    },
    formButton:{
    marginLeft:"80px",
    marginTop:"20px"

    }
   


})
const NewContact = () => { 
    const history = useHistory();
const [values,setValues]= useState({phoneNumber:"",firstName:"",lastName:"", phoneType:""})

const [errMsg,setErrMsg]=useState("")

const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
const handleSubmit=(e)=>{

e.preventDefault();


if(values.number==="" || values.firstName==="" || values.lastName==="" || values.phoneType===""){
    setErrMsg("All Fields are required")
    return false;
}else {

    setErrMsg("")
    fetch(`${constants.mainUrl}contacts`,{
        method:"POST",
        body:JSON.stringify(values),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }).then(data=>data.json()).then(data=>{ 
           if(data.status!=200){
            setErrMsg("error could not add contact ");
            return false;

        }
        alert("your contach has been added")
        history.push("/")
     }).catch(err=>{setErrMsg(err.message)})
    // return true
}



}    

    const classes= useStyles()
    return (
        <Grid container className={classes.mainDiv}>
            <Grid item xs={12}>
              <Typography className={classes.formHeading} align="center" variant="subtitle1" color="primary">Add Contact</Typography>
            <form onSubmit={handleSubmit}>
         <div>       
        <FormControl>
  <InputLabel htmlFor="my-input">Phone Number</InputLabel>
  <Input   inputProps={{  pattern: "[6][0-9]{11}" }}  id="my-input" value={values.phoneNumber} name="phoneNumber" onChange={handleChange} aria-describedby="my-helper-text" />
  <FormHelperText className={classes.helperText} id="my-helper-text">Number Format:601234567890,12 digits! </FormHelperText>
 </FormControl>
</div>
<div>       
        <FormControl>
  <InputLabel htmlFor="my-input">First Name</InputLabel>
  <Input pattern="[0-9]"  id="my-input" value={values.firstName} name="firstName" onChange={handleChange} aria-describedby="my-helper-text" />
  <FormHelperText className={classes.helperText} id="my-helper-text">First Name</FormHelperText>
 </FormControl>
</div>
<div>       
        <FormControl>
  <InputLabel htmlFor="my-input">Last Name</InputLabel>
  <Input pattern="[0-9]"  id="my-input" name="lastName" value={values.lastName} onChange={handleChange} aria-describedby="my-helper-text" />
  <FormHelperText className={classes.helperText} id="my-helper-text">Last Name</FormHelperText>
 </FormControl>
</div>
<div>       
<FormControl style={{width:"100%"}} >
        <InputLabel id="demo-simple-select-helper-label">Number Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="phoneType"
          value={values.phoneType}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Home</MenuItem>
          <MenuItem value={2}>Work</MenuItem>
          <MenuItem value={3}>Cellular</MenuItem>
          <MenuItem value={4}>Other</MenuItem>
        </Select>
        <FormHelperText  className={classes.helperText}>Some important helper text</FormHelperText>
      </FormControl>
</div>
<div>
<FormControl>
    
<Button className={classes.formButton} variant="contained" color="primary" type="submit"> ADD</Button>
</FormControl>
</div>
</form>
</Grid>
<Grid item xs={12}>
<Typography variant="subtitle1" className={classes.errorMsg}>{errMsg}</Typography>
</Grid>
</Grid>

    )
}

export default NewContact
