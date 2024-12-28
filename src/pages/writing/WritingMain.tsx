import { useEffect, useState } from 'react';
import { Post } from 'types/post.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostDTO } from 'api/post/postDTO.ts';
import { postApi } from 'api/index.ts';
import WritingHeader from 'pages/writing/WritingHeader.tsx';

const WritingMain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModifying, setIsModifying] = useState(false);
  const [post, setPost] = useState<Post>(
    location.state?.post || {
      title: '',
      content: '',
    }
  );

  useEffect(() => {
    if (location.state?.post) {
      setIsModifying(true);
    }
  }, []);

  const handleSave = async () => {
    // todo : userId는 나중에 로그인 관련 진행되면 변경해야함.
    console.log(location.state?.post);
    const requestPost: PostDTO = {
      id: post.id || undefined,
      title: post.title,
      content: post.content,
      userId: 1,
    };
    if (isModifying) {
      const isSuccessful = await postApi.updatePost(requestPost);
      if (!isSuccessful) {
        // todo : 에러 모달 띄우기
        return;
      }
      navigate(`/post/${requestPost.id}`);
      return;
    }
    const createdPost = await postApi.createPost(requestPost);
    navigate(`/post/${createdPost.id}`);
  };

  const handleCancel = () => {
    // todo : 정말 돌아갈 것인지 체크하는 모달을 띄워야함.
    navigate(`/`);
  };

  return (
    <>
      <WritingHeader handleSave={handleSave} handleCancel={handleCancel} />
      <main className="flex h-full w-[60rem] flex-grow flex-col items-center pt-5">
        <textarea
          className="h-[3.75rem] w-[47.5rem] flex-shrink-0 resize-none text-[2rem] outline-0"
          placeholder="제목"
          onChange={(e) =>
            setPost((prev) => ({ ...prev, title: e.target.value }))
          }
          value={post.title}
        />
        <div className="w-[47.5rem] border" />
        <textarea
          className="w-[47.5rem] flex-shrink-0 flex-grow resize-none pt-4 text-[1rem] outline-0"
          placeholder="내용을 입력하세요."
          onChange={(e) =>
            setPost((prev) => ({ ...prev, content: e.target.value }))
          }
          value={post.content}
        />
      </main>
    </>
  );
};

export default WritingMain;
