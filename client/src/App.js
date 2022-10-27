import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
    
      </ThemeProvider>
    </>
  );
}

export default App;