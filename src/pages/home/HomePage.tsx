import { postApi } from 'api/index.ts';
import { PostDTO } from 'api/post/postDTO.ts';
import PostCard from 'pages/home/components/PostCard.tsx';
import { useEffect, useState } from 'react';
import { formatDate } from 'utils/formatDate.ts';

const HomePage = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);

  const getPosts = async () => {
    const data = await postApi.getPosts();
    data.forEach((post) => {
      post.createdAt = formatDate(post.createdAt);
    });
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <main className="relative flex h-full flex-shrink-0 flex-col items-center justify-center">
        <img alt="main_picture" src="/src/assets/dairy_dog.png" />
        <div className="text-gray-300">
          이 그림은 DALLE에 의해 생성되었습니다.
        </div>
      </main>
      <div className="flex w-[1024px] flex-col border">
        <div className="flex h-16 w-full items-center text-3xl">개발 일지</div>
        <div>
          <div className="flex h-auto gap-3 p-4">
            {posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex w-[1024px] flex-col border">
        <div className="flex h-16 w-full items-center text-3xl">개발 일지</div>
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

export default HomePage;
