import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyle from './GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
