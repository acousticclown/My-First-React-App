import React from "react";
import "./App.css";
import NewContact from "./Contact";
import AddContact from "./Add";
import { useState } from "react";

function App() {

  const[conts, setConts] = useState([
    { name : "Shivansh Pratap", mobile : "9026631952", email : "shivanshsuryavanshi@gmail.com"},
    { name : "Suryansh Trivedi", mobile : "9876543221", email : "suryanshtrivedi1@gmail.com"}
  ]);

  return (
    <div className="App">
      
        <div className = "Contacts">
          <AddContact />
          {conts.map(cont => (
            <NewContact name = {cont.name} mobile = {cont.mobile} email = {cont.email} />
          ))}
        </div>
    </div>
  );
}

export default App;
