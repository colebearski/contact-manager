// CLASS BASED COMPONENT B/C WE'RE DOING STATE | RCC TAB

import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  // constructor runs when the component gets mounted, that's also how we will initialize state
  // constructor () {
  // super (); when you have a parent class and are extending another class
  // this.state = contacts array of objects
  // }
  // STATE SHOULD ALWAYS BE AT THE TOP

  // MOVED STATE TO CONTEXT.JS

  // state for our componenets
  // destructure {} pull out from satte

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
                //   Contact name={contact.name}
              ))}

              {/*contacts.map(contact => (<h1>{contact.name}</h1>))    */}
            </React.Fragment>
          );
        }}
        {/* comes from the context value */}
      </Consumer>
    );
  }
}

export default Contacts;

/* PROPAGATING UP TO THE PARENT COMPONENT
WE CLICK, AND IT CALLS ONDELETECLICK WHICH CALLS DELETECLICKHANDLER IN THE PROPS
AND PROP IS SET TO DELETE CONTACT AND NOW WE HAVE ACCESS TO THE STATE
*/
