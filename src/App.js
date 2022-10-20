import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Profile from "./Components/Profile";
import AppBar from "./Components/AppBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { theme } from './Components/Styles/theme';
import './App.css';

function App() {
  return (
  <>       
      <CssBaseline/>
      <ThemeProvider theme={theme}>
          <AppBar/>          
          <Profile/>
          <Projects/>
          <Skills/>
          <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
