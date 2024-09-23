export interface CustomTablePaginationProps {
  count: number;
  rowsPerPage: number;
}
export interface CategoriesProps {
  id: string;
  name: string;
  image: string;
  price_type?: string;
  created_at?: string;
  part_number?: string;
  type?: string;
  large_title?: string;
  category?: string;
  small_title?: string;
  basic_price?: string;
  supplier_name?: string;
}

export interface HeadCell {
  id: keyof CategoriesProps;
  label: string;
}

export interface EnhancedTableProps {
  headCells: HeadCell[];
}

export interface SelectCheckAllTableProps {
  numSelected: number;
  rowCount: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string[];
  handleOpenModal: () => void;
}
