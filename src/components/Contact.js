// CLASS COMPONENT
// need to access props with = this.props

import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {};

  onShowClick = e => {};

  // binds the state to the function. This isn't a lifecycle function, it's custom
  // events in react

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
          {/* this ^^ referring to a method in this class */}
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
