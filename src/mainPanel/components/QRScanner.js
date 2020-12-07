import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

export default class QRScanner extends Component {

  onError = (error) => {
    this.props.onError(error);
  }

  onScan = (result) => {
    if(result !== null)
      this.props.onScan(result);
  }
  
  render() {

    const previewStyle = {
      height: 300,
      objectFit: "fill"
    };

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
    )
  }
}
