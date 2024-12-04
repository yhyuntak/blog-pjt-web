import axios from 'services/api';
export const fetchPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const fetchPostById = async (id: string) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
