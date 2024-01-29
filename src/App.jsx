import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import AnswerPage from './pages/AnswerPage';
import { UserProvider } from './contexts/userContext';
import Layout from './layouts';

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />} />
              <Route path="/" exact element={<MainPage />} />
              <Route path="/post/:subjectId" exact element={<QuestionPage />} />
              <Route path="/post/:subjectId/answer" exact element={<AnswerPage />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
