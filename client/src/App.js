import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import { Route, Routes } from 'react-router-dom';
import HeaderTemplate from './components/templates/HeaderTemplate';
import MainPage from './components/pages/MainPage';
import QuestionPage from './components/pages/QuestionPage';
import SignupPage from './components/pages/SignupPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      </ThemeProvider>
        <HeaderTemplate />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;