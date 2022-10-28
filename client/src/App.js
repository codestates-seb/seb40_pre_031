import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/MainPage';
import QuestionPage from './components/pages/QuestionPage'
import FooterTemplate from './components/templates/FooterTemplate';
import HeaderTemplate from './components/templates/HeaderTemplate'

function App() {
  return (
    <>
      <div>Hello World!</div>
      <HeaderTemplate />
      <FooterTemplate />

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
