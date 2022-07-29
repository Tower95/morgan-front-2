
import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Login from './pages/login/login';
import Footer from './shared/footer/footer';
import Navbar from './shared/navbar/navbar';
import theme  from './styles/style'
import { ThemeProvider } from '@mui/material/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Container>

        <Paper sx={{
          boxShadow : "none"
        }}>

          <Login />
        </Paper>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
