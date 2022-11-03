/* eslint-disable no-unused-vars */
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyle from './GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
