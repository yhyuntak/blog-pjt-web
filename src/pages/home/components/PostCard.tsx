import { PostDTO } from 'api/post/postDTO.ts';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

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

export default PostCard;
