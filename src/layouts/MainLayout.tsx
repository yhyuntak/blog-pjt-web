import { ReactNode } from 'react';
import Header from 'layouts/Header.tsx';
import Footer from 'layouts/Footer.tsx';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
