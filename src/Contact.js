import React from "react";
import "./Contact.css";


function NewContact(props) {


    return (
        <div className = "cntct">
            <h1>{props.name}</h1>
            <h2>{props.mobile}</h2>
            <h3>{props.email}</h3>
        </div>
    );
}

export default NewContact;