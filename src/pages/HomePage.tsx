const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[200px] bg-gray-200">
        <div className="text-[40px] whitespace-nowrap">뽀또의 기술 블로그</div>
        <div className="text-[24px] whitespace-nowrap">
          토이 프로젝트 개발과 기술 일지를 작성하는 공간입니다.
        </div>
      </div>
      <div className="text-3xl font-bold">Welcome to My Blog</div>
      <p>Explore the latest posts!</p>
    </div>
  );
};

export default HomePage;
