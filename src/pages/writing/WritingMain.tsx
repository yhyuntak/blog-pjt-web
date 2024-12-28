import { Dispatch, SetStateAction } from 'react';
import { Post } from 'types/post.ts';

interface WritingMainProps {
  setPost: Dispatch<SetStateAction<Post>>;
}

const WritingMain = (props: WritingMainProps) => {
  return (
    <main className="flex h-full w-[60rem] flex-grow flex-col items-center border-2 border-solid pt-5">
      <textarea
        className="h-[3.75rem] w-[47.5rem] flex-shrink-0 resize-none text-[2rem] outline-0"
        placeholder="제목"
        onChange={(e) =>
          props.setPost((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <div className="w-[47.5rem] border" />
      <textarea
        className="w-[47.5rem] flex-shrink-0 flex-grow resize-none pt-4 text-[1rem] outline-0"
        placeholder="내용을 입력하세요."
        onChange={(e) =>
          props.setPost((prev) => ({ ...prev, content: e.target.value }))
        }
      />
    </main>
  );
};

export default WritingMain;
