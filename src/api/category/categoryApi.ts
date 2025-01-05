import axiosInstance from 'api/axiosInstance.ts';
import { CategoryParentDTO } from 'api/category/CategoryParentDTO.ts';

export const getCategoryParents = async (): Promise<CategoryParentDTO[]> => {
  const response = await axiosInstance.get('category/parents');
  return response.data;
};
