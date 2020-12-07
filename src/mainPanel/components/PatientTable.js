import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import PatientElement from './PatientElement'



export default class PatientTable extends Component {



  render() {
    return (
      <div>
        <h1> </h1>
        <Container maxWidth="lg">
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
          <PatientElement/>
        </Container>
      </div>
    )
  }
}
