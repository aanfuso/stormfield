import {
  CssBaseline,
  Container,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { base } from 'themes';


const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
};

const Layout = (props: any) => (
  <ThemeProvider theme={base}>
    <CssBaseline />

    <Container
      maxWidth="sm"
      sx={containerStyles}
    >
      {props.children}
    </Container>
  </ThemeProvider>
);

export default Layout;
