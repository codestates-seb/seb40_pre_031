/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/templates/HeaderTemplate';
import LeftNav from './components/organism/LeftNav';
import Question from './components/pages/QuestionPage';
import QuestionAsk from './components/pages/QuestionAskPage';
import Loginsubmit from './components/organism/Loginsubmit';
import SignUp from './components/pages/SignupPage';
import Footer from './components/templates/FooterTemplate';
import Main from './components/pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Loginsubmit />} />
          <Route path="/leftnav" element={<LeftNav />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/questionask" element={<QuestionAsk />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
