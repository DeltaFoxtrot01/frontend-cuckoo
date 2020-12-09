import {Paper} from '@material-ui/core'
import React, { Component } from 'react'
import StandardButton from './StandardButton'



export default class PatientElement extends Component {

  constructor(props) {
    super(props)
    
    this.patient = this.props.patient;

    this.state = {
       
    }
  }
  
  onPositive = () => {
    this.props.onPositive(this.patient);
  }

  onNegative = () => {
    this.props.onNegative(this.patient);
  }

  render() {
    return (
      <Paper elevation={4} className="mainPanel-listMargin mainPanel-listPadding">
        <div className=" mainPanel-flexRow mainPanel-listMarginSide">
          <div className="mainPanel-inputSize">
            {this.patient.getNote()}
          </div>
          <div className="mainPanel-flexRow">
            <StandardButton onClick={this.onPositive.bind(this)} color="primary">Positive</StandardButton> 
            <StandardButton onClick={this.onNegative.bind(this)} color="secondary">Negative</StandardButton>
          </div>
        </div>
      </Paper>
    )
  }
}
