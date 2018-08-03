import { grey } from '@material-ui/core/colors/';
import { createMuiTheme } from '@material-ui/core/styles';

const orange = "#FF5F4C";

const Theme = createMuiTheme({
    typography: {
      fontFamily: 'MCWXX',
    },
    palette: {
      primary: {
        main: '#f44336',
        contrastText: '#fff',
      },
      secondary: grey,
    }
});

export default Theme