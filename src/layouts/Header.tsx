const Header = () => {
  return (
    <div className="flex justify-between items-center h-[100px] bg-amber-600">
      <div className="text-2xl">뽀또의 개발 일지</div>
      <div className="flex gap-3.5">
        <div>검색</div>
        <div>About</div>
        <div>Sign in</div>
      </div>
    </div>
  );
};

export default Header;
