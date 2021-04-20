import React,{useEffect,useState} from 'react'
import MaterialTable from 'material-table'
import {makeStyles, Typography} from '@material-ui/core'
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import constants from '../constants'


const useStyles= makeStyles({
    tableDiv:{
        maxWidth:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"1%",
        padding:"5px",
        

    },
    formHeading:{
        marginBottom:"10px"
    }
})
const Contacts = () => {
    
    const [contacts,setContacts]=useState([])
    
    useEffect(() => {
         
        fetch(`${constants.mainUrl}contacts`).then(data=>data.json()).then(data=>{

        console.log(data.numbers)
        setContacts(data.numbers)
        })
      }, []);
      const columns = [
        {
            title: "First Name",
            field: "first_name",
            headerStyle: {
                backgroundColor: "#3f51b5",
                color:"#fff"
              }
           
          },

          {
            title: "Last Name",
            field: "last_name",
            headerStyle: {
                backgroundColor: "#3f51b5",
                color:"#fff"
              }
           
          },
          {
            title: "Phone Number",
            field: "phone_number",
            headerStyle: {
                backgroundColor: "#3f51b5",
                color:"#fff"
              }
           
          },
          {
            title: "Phone type",
            field: "phone_type",
            headerStyle: {
                backgroundColor: "#3f51b5",
                color:"#fff"
              }
           
          },
        
        
      ]
      
    const classes= useStyles()
    return (
       
        <div className={classes.tableDiv}  >
       
         <Typography className={classes.formHeading} color="primary" align="center" variant="h5">My Contacts</Typography>   
        <MaterialTable
          columns={columns}
          data={contacts}
          title=""
          options={{
            paging:true,
            pageSize:5,       
            emptyRowsWhenPaging: true,   
            pageSizeOptions:[""],
            tableLayout: "fixed"    
          }

          }
         
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />,
            FirstPage:(props)=><FirstPage />,
            LastPage:(props)=><LastPage />,
            NextPage:(props)=><ChevronRight />,
            PreviousPage:(props)=><ChevronLeft />,
            SortArrow:(props)=><ArrowDownward/>

          }}
        />
      </div>
    
             
        
    )
}

export default Contacts
    