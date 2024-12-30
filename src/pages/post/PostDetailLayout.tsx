import MainHeader from 'pages/main/MainHeader.tsx';
import { Outlet } from 'react-router-dom';

const PostDetailLayout = () => {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <MainHeader />
      <div className="flex h-full w-full justify-center pt-20">
        <aside className="fixed left-0 hidden h-full w-56 border lg:block">
          좌측 사이드바
        </aside>
        <div className="absolute left-0 w-lvw lg:left-56 xl:static xl:w-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PostDetailLayout;
