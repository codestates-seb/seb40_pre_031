<<<<<<< HEAD
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
=======
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
>>>>>>> dev-fe

function App() {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

=======
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </>
  );
}
>>>>>>> dev-fe
export default App;
