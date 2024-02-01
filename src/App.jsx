import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import AnswerPage from './pages/AnswerPage';
import ListPage from 'pages/ListPage';
import { UserProvider } from './contexts/userContext';
import { SubjectProviderWithOutlet } from 'contexts/subjectContext';
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
              <Route element={<SubjectProviderWithOutlet />}>
                <Route path="/post/:subjectId" exact element={<QuestionPage />} />
                <Route path="/post/:subjectId/answer" exact element={<AnswerPage />} />
              </Route>
              <Route path="/list" exact element={<ListPage />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
