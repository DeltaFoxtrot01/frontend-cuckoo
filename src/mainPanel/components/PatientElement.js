import { Button, Card, createMuiTheme, ThemeProvider } from '@material-ui/core'
import React, { Component } from 'react'

function StandardButton(props) {

  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          margin: "0px 10px"
        }
      }
    },
    palette: {
      primary: {
        main: "#00A65E"
      },
      secondary: {
        main: "#FB433B"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button style={{maxHeight: "80px"}} color={props.color} variant="contained" {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  );
}


export default class PatientElement extends Component {
  render() {
    return (
      <Card className="mainPanel-listMargin">
        <div className=" mainPanel-flexRow mainPanel-listMarginSide">
          <h1>Patient</h1>
          <div className="mainPanel-inputSize">
            Some information of the patient
          </div>
          <div>
            <StandardButton color="primary">Positive</StandardButton> 
            <StandardButton color="secondary">Negative</StandardButton>
          </div>
        </div>
      </Card>
    )
  }
}
