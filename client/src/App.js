import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import FooterTemplate from "./components/templates/FooterTemplate";

import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';



function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FooterTemplate />
      </ThemeProvider>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        {/* <Route path="/questions" element={<QuestionPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </>
  );
}

export default App;