import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
// import Loginsubmit from './components/organism/Loginsubmit';
// import SignupPage from './components/pages/SignupPage';
import { QuestionDetail } from './components/templates/QuestionDetail';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QuestionDetail></QuestionDetail>
      </ThemeProvider>
    </>
  );
}

export default App;
