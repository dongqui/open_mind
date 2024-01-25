import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import AnswerPage from './pages/AnswerPage';
import { UserProvider } from './contexts/userContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/post/:id/answer" exact element={<AnswerPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
