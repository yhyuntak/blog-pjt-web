import { PostDTO } from 'api/post/postDTO.ts';
import axiosInstance from 'api/axiosInstance.ts';

export const createPost = async (post: PostDTO) => {
  const response = await axiosInstance.post('/post', post);
  return response.data;
};

export const getPosts = async (): Promise<PostDTO[]> => {
  const response = await axiosInstance.get('/post');
  return response.data;
};
