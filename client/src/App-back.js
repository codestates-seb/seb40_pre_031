import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/MainPage';
import QuestionPage from './components/pages/QuestionPage';
import FooterTemplate from './components/templates/FooterTemplate';
import HeaderTemplate from './components/templates/HeaderTemplate';
import SignupPage from './components/pages/SignupPage';

function App() {
  return (
    <>
      <HeaderTemplate />
      <FooterTemplate />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
