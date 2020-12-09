import { Divider } from '@material-ui/core'
import React, { Component } from 'react'
import StandardButton from './StandardButton';

export default class NegativePanel extends Component {

  constructor(props) {
    super(props)
    
    this.patient = this.props.patient;

    this.state = {
       
    }
  }

  onClick = () => {
    this.props.onClick(this.patient);
  }
  
  render() {
    return (
      <div className="mainPanel-center
                      mainPanel-qrPadding">
        <div>
          <h2>Are you sure you want to mark</h2>
          <h2>this patient as Negative?</h2>
          <Divider/>
        </div>
        <div>
          <h3>Notes:</h3>
          <span>{this.patient.getNote()}</span>
        </div>
        <br/>
        <StandardButton onClick={this.onClick.bind(this)} color="secondary">
          Submit
        </StandardButton>
      </div>
    )
  }
}
