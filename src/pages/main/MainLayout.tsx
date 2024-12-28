import MainHeader from 'pages/main/MainHeader.tsx';
import { Outlet } from 'react-router-dom';

// 일단 사이즈 별 디자인은 고려하지 않는다!

const MainLayout = () => {
  return (
    <div className="mx-auto h-screen px-4">
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default MainLayout;
