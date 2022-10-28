import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import SignupPage from "./components/pages/SignupPage.js";
import LoginForm from "./components/molecules/LoginForm.js";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LoginForm/>
        {/* <SignupPage></SignupPage> */}
      </ThemeProvider>
    </>
  );
}

export default App;