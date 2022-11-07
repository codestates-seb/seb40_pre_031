/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/templates/HeaderTemplate';
import LeftNav from './components/organism/LeftNav';
import Question from './components/pages/QuestionPage';
import QuestionAsk from './components/pages/QuestionAskPage';
import LoginPage from './components/pages/LoginPage';
import SignUp from './components/pages/SignupPage';
import Footer from './components/templates/FooterTemplate';
import QuestionDetailPage from './components/pages/QuestionDetailPage';
import Home from './components/pages/HomePage';

import MainPage from './components/pages/MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leftnav" element={<LeftNav />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/questionask" element={<QuestionAsk />} />
          <Route
            path="/QuestionDetailPage"
            element={<QuestionDetailPage question_id={'9'} />}
          />

          <Route path="/main" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
