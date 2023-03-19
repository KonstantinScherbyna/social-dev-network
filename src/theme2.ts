import { createTheme } from '@mui/material/styles';
import { green, grey, red, deepOrange } from '@mui/material/colors';
import blue from '@mui/material/colors/blue';

const theme2 = createTheme({
  palette: {
    primary: {
      light: '#a1887f',
      main: '#3e2723',
      dark: '#5d4037',
    },
    secondary: {
      light: '#fff5f8',
      main: '#bcaaa4',
      dark: '#d500f9',
    },
    warning: {
      light: '#ff1744',
      main: '#ffea00',
      dark: '#33eaff',
    },
    error: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
    },
    success: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    }
  },

});




export default theme2;