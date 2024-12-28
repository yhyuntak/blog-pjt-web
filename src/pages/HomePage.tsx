import { useCallback, useEffect, useState } from 'react';
import { postApi } from 'api/index.ts';
import { PostDTO } from 'api/post/postDTO.ts';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);

  const getPosts = async () => {
    const data = await postApi.getPosts();
    // todo : data에 createdAt 있어야함.
    data.forEach((post) => {
      const date = new Date(post.createdAt);
      const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      };
      post.createdAt = date.toLocaleDateString('en-US', options);
    });
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="flex flex-col gap-10 py-10">
      <main className="relative flex h-full flex-shrink-0 flex-col items-center justify-center">
        <img alt="main_picture" src="/src/assets/dairy_dog.png" />
        <div className="text-gray-300">
          이 그림은 DALLE에 의해 생성되었습니다.
        </div>
      </main>
      <div className="flex flex-col">
        <div className="flex h-16 items-center text-3xl">개발 일지</div>
        <div>
          <div className="flex h-auto gap-3 p-4">
            {posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface PostCardProps {
  post: PostDTO;
}
const PostCard = (props: PostCardProps) => {
  const navigate = useNavigate();
  const truncateText = useCallback((text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }, []);

  const handlePostClick = () => {
    navigate(`/post/${props.post.id}`);
  };

  return (
    <div
      className="ho flex h-44 w-44 flex-shrink-0 flex-col gap-[12px] transition-transform duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer hover:border hover:border-gray-100 hover:shadow-lg"
      onClick={handlePostClick}
    >
      <div className="h-[100px] flex-shrink-0 border">
        그림이 들어가야함? 고민하기
      </div>
      <div className="flex flex-grow flex-col gap-[4px]">
        <div className="h-12 break-words">
          {truncateText(props.post.title, 20)}
        </div>
        <div className="flex h-3 items-center text-[0.75rem] text-gray-400">
          {props.post.createdAt}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
