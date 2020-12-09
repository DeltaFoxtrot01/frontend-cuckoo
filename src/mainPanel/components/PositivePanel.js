import { Divider, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import StandardButton from 'mainPanel/components/StandardButton';

export default class PositivePanel extends Component {
  constructor(props) {
    super(props)
    
    this.patient = this.props.patient;

    this.date = null;
  }

  onChange = (event) => {
    let aux = event.target.value.split("-");
    let auxDate = new Date(aux[0], aux[1] -1, aux[2]);
    this.date = auxDate.getTime();
  }

  onClick = () => {
    if(this.date !== null){
      this.patient.setDate(this.date);
      this.props.onClick(this.patient);
    }
  }
  
  render() {
    return (
      <div className="mainPanel-center
                      mainPanel-qrPadding">
        <div>
          <h2>Are you sure you want to mark</h2>
          <h2>this patient as Positive?</h2>
          <Divider/>
        </div>
        <div>
          <h3>Notes:</h3>
          <span>{this.patient.getNote()}</span>
        </div>
        <div>
          <h3>Suspected Date of the Infection:</h3>
          <TextField
            id="date"
            type="date"
            label="Day 1"
            onChange={this.onChange.bind(this)}
            InputLabelProps={{
              shrink: true,
            }}
            />
        </div>
        <br/>
        <StandardButton onClick={this.onClick.bind(this)} color="primary">
          Submit
        </StandardButton>
      </div>
    )
  }
}
