// CLASS COMPONENT
// need to access props with = this.props

import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // onShowClick = e => {
  //   // state is immutable, you can't directly manipulate it
  //   // cannot do this.state = showContactInfo: false
  //   // need to use setState with component based state
  //   // !this = not
  //      MOVED TO ARROW FUNCTION
  //   this.setState({
  //     showContactInfo: !this.state.showContactInfo
  //   });
  // };

  // binds the state to the function. This isn't a lifecycle function, it's custom
  // events in react

  render() {
    const { name, email, phone } = this.props.contact;
    // destructure
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
          />
          {/* this ^^ referring to a method in this class */}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
        {/* ? is ternary */}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
