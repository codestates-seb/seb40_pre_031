import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
import QuestionAskPage from './components/pages/QuestionAskPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QuestionAskPage />
      </ThemeProvider>
    </>
  );
}

export default App;
