const HomePage = () => {
  return (
    <div>
      <div className="flex h-[200px] flex-shrink-0 flex-col items-center justify-center bg-gray-200">
        <div className="whitespace-nowrap text-[40px]">뽀또의 기술 블로그</div>
        <div className="whitespace-nowrap text-[24px]">
          토이 프로젝트 개발과 기술 일지를 작성하는 공간입니다.
        </div>
      </div>
      <div className="text-3xl font-bold">Welcome to My Blog</div>
      <p>Explore the latest posts!</p>
    </div>
  );
};

export default HomePage;
