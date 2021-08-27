import Header from './components/Header';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
