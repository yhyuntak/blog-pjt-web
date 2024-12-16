import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import WritePage from 'pages/WritePage';

const App = () => {
  return (
    // todo : 깃허브 레파지토리, remote 설정 이름 바꾸기.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/write" element={<WritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
