import WritingHeader from 'pages/writing/WritingHeader.tsx';
import { useState } from 'react';
import { Post } from 'types/post.ts';
import { createPost } from 'api/post/postApi.ts';
import { PostDTO } from 'api/post/postDTO.ts';
import { useNavigate } from 'react-router-dom';
import WritingMain from 'pages/writing/WritingMain.tsx';

const WritingLayout = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState<Post>({
    title: '',
    content: '',
  });

  const handleSave = async () => {
    // todo : userId는 나중에 로그인 관련 진행되면 변경해야함.
    const requestPost: PostDTO = {
      title: post.title,
      content: post.content,
      userId: 1,
    };
    await createPost(requestPost);
    // todo : post/{id}로 이동하는 것으로 변경해야함.
    // navigate(`/post/${data.id}`);
    navigate(`/`);
  };

  const handleCancel = () => {
    // todo : 정말 돌아갈 것인지 체크하는 모달을 띄워야함.
    navigate(`/`);
  };

  return (
    <div className="layout">
      <WritingHeader handleSave={handleSave} handleCancel={handleCancel} />
      <WritingMain setPost={setPost} />
    </div>
  );
};

export default WritingLayout;
