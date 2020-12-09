import { TextField } from '@material-ui/core';
import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import { Hash } from 'tools/models/Hash';
import StandardButton from 'mainPanel/components/StandardButton';

export default class QRScanner extends Component {

  constructor(props) {
    super(props)
    this.hash = null;
    this.notes = "";

    this.state = {
       submitPanel: false
    }
  }

  onSubmit = () => {
    let res = new Hash({
      hashValue: this.hash,
      note: this.notes,
      id: null
    })
    this.props.onScan(res);
  }
  
  onEdit = (event) => {
    this.notes = event.target.value;
  }

  onError = (error) => {
    this.props.onError(error);
  }

  onScan = (result) => {
    if(result !== null){
      this.hash = result;
      this.setState({
        submitPanel: true
      });
    }
  }
  
  render() {

    const previewStyle = {
      height: 300,
      objectFit: "fill"
    };


    if(this.state.submitPanel){
      return (<div className="mainPanel-center
                              mainPanel-qrPadding">
                <h1>Patient Information</h1>
                <br/>
                <span>Write some notes to remember the Patient:</span>
                <br/>
                <TextField onChange={this.onEdit.bind(this)} fullWidth placeholder="Patient Notes"/>
                <br/>
                <StandardButton onClick={this.onSubmit.bind(this)} color="primary">Submit</StandardButton>
              </div>
      );
    }
    else{

      return (
        <div className="mainPanel-center
                        mainPanel-qrPadding">
        <h1>Request the Patient for the QR</h1>
        <QrReader
          delay={50}
          facingMode={"rear"}
          style={previewStyle}
          
          onError={this.onError.bind(this)}
          onScan={this.onScan.bind(this)}
          />
        </div>
      );
    }
  }
}
