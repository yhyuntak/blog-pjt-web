import { PencilIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    console.log('go home');
    navigate('/');
  };

  const handleWrite = () => {
    console.log('write');
    navigate('/write');
  };
  return (
    <div className="flex justify-between items-center h-[100px] p-5">
      <div className="text-2xl min-w-[90px]" onClick={handleGoHome}>
        뽀또 공장
      </div>
      <div className="flex gap-[8px]">
        <div className="whitespace-nowrap cursor-pointer">개발 일지</div>
        <div className="whitespace-nowrap cursor-pointer">개인 프로젝트</div>
        <div className="whitespace-nowrap cursor-pointer">경제 공부</div>
        <div className="whitespace-nowrap cursor-pointer">영어 공부</div>
        <div className="whitespace-nowrap cursor-pointer">검색</div>
        <div className="whitespace-nowrap cursor-pointer">Sign in</div>
        <div
          className="flex items-center justify-center w-[30px] h-[30px] bg-gray-200 rounded-[4px] cursor-pointer
          hover:bg-gray-300"
          onClick={handleWrite}
        >
          <PencilIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;
