import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
// import Loginsubmit from './components/organism/Loginsubmit';
// import SignupPage from './components/pages/SignupPage';
import { QuestionDetailPage } from './components/pages/QuestionDetailPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QuestionDetailPage></QuestionDetailPage>
      </ThemeProvider>
    </>
  );
}

export default App;
