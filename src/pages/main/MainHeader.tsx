import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CategoryParentDTO } from 'api/category/CategoryParentDTO.ts';
import { categoryApi } from 'api/index.ts';
import HeaderDropdownComponent from 'pages/main/components/HeaderDropdownComponent.tsx';

const MainHeader = () => {
  const navigate = useNavigate();

  const [categoryParents, setCategoryParents] = useState<CategoryParentDTO[]>(
    []
  );

  const handleGoHome = () => {
    console.log('go home');
    navigate('/');
  };

  const handleWrite = () => {
    console.log('write');
    navigate('/write');
  };

  const getCategoryParents = async () => {
    const data = await categoryApi.getCategoryParents();
    setCategoryParents(data);
  };

  useEffect(() => {
    getCategoryParents();
  }, []);

  return (
    <div className="fixed z-10 flex h-20 w-full items-center justify-between whitespace-nowrap border-b border-solid border-[#E5E8EB] bg-white py-10 sm:px-3 md:px-5 lg:px-10">
      <div
        className="h-auto cursor-pointer select-none rounded p-2 hover:bg-gray-300 sm:text-xl md:text-2xl lg:text-3xl"
        onClick={handleGoHome}
      >
        뽀또의 개발 일지
      </div>
      <div className="flex items-center gap-3">
        {categoryParents.map((cp) => {
          return (
            <HeaderDropdownComponent
              key={cp.id}
              triggerElement={
                <div className="w-22 flex cursor-pointer justify-center rounded pl-1 pr-1 text-xl hover:bg-gray-300">
                  {cp.name}
                </div>
              }
              dropdownItems={cp.categoryChildren}
            />
          );
        })}
        <div
          className="header-button bg-[#808080] hover:bg-[#606060]"
          onClick={handleWrite}
        >
          글쓰기
        </div>
        <div
          className="header-button bg-gray-200 hover:bg-gray-300"
          onClick={handleWrite}
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
        </div>
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300">
          <UserIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
