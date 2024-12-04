import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    // todo : 깃허브 레파지토리, remote 설정 이름 바꾸기.
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/*<Route path="/post/:id" element={<PostPage />} />*/}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
