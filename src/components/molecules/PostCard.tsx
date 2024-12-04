import { Post } from 'types/post.ts';
import { Link } from 'react-router-dom';

type PostCardProps = {
  post: Post;
};
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} className="text-blue-500">
        Read more
      </Link>
    </div>
  );
};
export default PostCard;
