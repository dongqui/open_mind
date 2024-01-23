import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/list" exact element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
