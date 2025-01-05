export interface CategoryChildDTO {
  id: number;
  name: string;
  sort: number;
}

export interface CategoryParentDTO {
  id: number;
  name: string;
  sort: number;
  categoryChildren: CategoryChildDTO[];
}
