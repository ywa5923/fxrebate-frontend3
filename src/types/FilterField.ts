import { FilterOption } from "./FilterOption";
export type FilterField = {
    field: string;
    name: string;
    type: 'checkbox' | 'radio' ;
    options?: FilterOption[]; // Only for fields with predefined options
  };