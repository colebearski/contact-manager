// CLASS BASED COMPONENT B/C WE'RE DOING STATE | RCC TAB

import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // constructor runs when the component gets mounted, that's also how we will initialize state
  // constructor () {
  // super (); when you have a parent class and are extending another class
  // this.state = contacts array of objects
  // }

  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "kwill@gmail.com",
        phone: "777-777-7777"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henryJ@gmail.com",
        phone: "444-444-4444"
      }
    ]
  };
  // state for our componenets
  // destructure {} pull out from satte

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
          //   Contact name={contact.name}
        ))}

        {/*contacts.map(contact => (<h1>{contact.name}</h1>))    */}
      </div>
    );
  }
}

export default Contacts;
