import { Container, Dialog, Paper } from '@material-ui/core'
import React, { Component } from 'react'
import PatientElement from 'mainPanel/components/PatientElement'
import PositivePanel from './PositivePanel'
import NegativePanel from './NegativePanel'
import { HashService } from 'tools/remoteServices/HashService'
import { displayErrorMessage, displaySuccessMessage } from 'standard/reducer/StandardMethods'

export default class PatientTable extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       open: false,
       patient: null,
       positive: null
    }
  }

  onPositive = (patient) => {
    console.log("Positive", patient);
    this.setState({
      patient: patient,
      open: true,
      positive: true
    })
  }

  onNegative = (patient) => {
    console.log("Negative", patient);
    this.setState({
      patient: patient,
      open: true,
      positive: false
    });
  }

  onPositiveSubmit = (patient) => {

  }

  onNegativeSubmit = (patient) => {
    HashService.markPatientAsNegative(patient)
    .then(response => {
      displaySuccessMessage("Patient registered as negative");
      this.props.onUpdate();
    })
    .catch(err => {
      displayErrorMessage("Unable to mark patient as negative");
    });
    
    this.closePanel();
  }

  onPositiveSubmit = (patient) => {
    HashService.markPatientAsPositive(patient)
    .then(response => {
      displaySuccessMessage("Patient registered as positive");
      this.props.onUpdate();
    })
    .catch(err => {
      displayErrorMessage("Unable to mark patient as positive");
    });
    
    this.closePanel();
  }

  closePanel = () => {
    this.setState({
      open: false,
      patient: null
    })
  }

  render() {
    return (
      <div>
        <h1> </h1>
        <Container maxWidth="lg">
          <Paper elevation={5} className="mainPanel-flexRow 
                                          mainPanel-listMarginSide 
                                          mainPanel-headerListPadding">
            <h1>Patient Notes</h1>
            <h1>Test Result</h1>
          </Paper>
          {this.props.patients.map((patient) => {
            return <PatientElement  patient={patient} 
                                    onPositive={this.onPositive.bind(this)} 
                                    onNegative={this.onNegative.bind(this)}
                                    key={patient.getId()} />
          })}
        </Container>
        <Dialog open={this.state.open} onClose={this.closePanel.bind(this)}>
          {this.state.positive ? <PositivePanel patient={this.state.patient} onClick={this.onPositiveSubmit.bind(this)}/> :
                                 <NegativePanel patient={this.state.patient} onClick={this.onNegativeSubmit.bind(this)}/>}
        </Dialog>
      </div>
    )
  }
}
