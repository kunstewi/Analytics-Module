// import AnalyzingPage from './components/AnalyzingPage';
import CopyrightFooter from './components/copyrightFooter';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from './components/Light_Dark';
import Navbar from './components/Navbar';
import './styles/theme.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className='min-h-screen'>
        <Navbar/>
        <LandingPage/>
        <CopyrightFooter/>
      </div>
    </ThemeProvider>
  )
}

export default App