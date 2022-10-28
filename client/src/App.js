import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import SignupPage from "./components/pages/SignupPage.js";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SignupPage></SignupPage>
      </ThemeProvider>
    </>
  );
}

export default App;