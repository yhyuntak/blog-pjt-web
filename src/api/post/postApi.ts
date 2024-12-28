import { PostDTO } from 'api/post/postDTO.ts';
import axiosInstance from 'api/axiosInstance.ts';

export const createPost = async (post: PostDTO) => {
  const response = await axiosInstance.post('/post', post);
  return response.data;
};

export const updatePost = async (post: PostDTO) => {
  const response = await axiosInstance.put(`/post/${post.id}`, post);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await axiosInstance.delete(`/post/${postId}`);
  return response.data;
};

export const getPosts = async (): Promise<PostDTO[]> => {
  const response = await axiosInstance.get('/post');
  return response.data;
};

export const getPost = async (postId: string): Promise<PostDTO> => {
  const response = await axiosInstance.get(`post/${postId}`);
  return response.data;
};
