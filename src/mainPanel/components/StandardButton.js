import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core'

export default function StandardButton(props) {

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
