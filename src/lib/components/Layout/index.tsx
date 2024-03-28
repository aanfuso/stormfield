import {
  CssBaseline,
  Container,
} from '@mui/material';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});


function Layout(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {props.children}
    </ThemeProvider>
  )
};

export default Layout;
