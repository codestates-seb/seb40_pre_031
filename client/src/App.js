import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
import QuestionAskPage from './components/pages/QuestionAskPage';
import AskQuestion from './components/organism/AskQuestion';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <QuestionAskPage /> */}
        <AskQuestion />
      </ThemeProvider>
    </>
  );
}

export default App;
