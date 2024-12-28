import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainLayout from 'pages/main/MainLayout.tsx';
import HomePage from 'pages/HomePage';
import WritingLayout from 'pages/writing/WritingLayout.tsx';

const App = () => {
  return (
    // write를 저렇게 빼는게 맞는진 모르겠음.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/write" element={<WritingLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
