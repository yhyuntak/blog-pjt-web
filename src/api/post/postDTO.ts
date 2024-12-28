export interface PostDTO {
  id?: number;
  title: string;
  content: string;
  userId: number;
  createdAt?: string;
  createdBy?: number;
  updatedAt?: string;
  updatedBy?: number;
}
