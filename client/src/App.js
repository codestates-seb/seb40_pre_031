import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
import Loginsubmit from './components/organism/Loginsubmit';
// import SignupPage from './components/pages/SignupPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Loginsubmit></Loginsubmit>
      </ThemeProvider>
    </>
  );
}

export default App;
