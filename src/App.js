import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Contacts from "./components/Contacts"
import NewContact from "./components/NewContact"
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
     <Route exact path="/" > 
     <Contacts />
      </Route>
     
     <Route exact path="/add">
      <div className="App">
     <NewContact />
    </div>

      </Route>
      </Switch>
      
    <Footer />
    </Router>
   
    
  );
}

export default App;
