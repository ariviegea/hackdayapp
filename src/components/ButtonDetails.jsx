import React, { Component } from 'react';

class ButtonDetails extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick}>
          Click This
        </button>
      )
    }
  }

export default ButtonDetails;