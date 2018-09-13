// CONTEXT API DOG
// KIND OF LIKE REDUX STORE
// This class component will be wrapped around our entire application
import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  // globalish state
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

// THIS FILE NOW HOLDS ALL OF THE APPLICATION LEVEL STATE
// CREATED A PROVIDER WHICH NOW HOLDS A VALUE OF STATE
// WE PUT ALL THE STATE BUT YOU CAN JUST DO PIECES IF YOU WANT
