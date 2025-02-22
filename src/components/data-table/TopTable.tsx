import React from "react";
import SearchTable from "./SearchTable";
import ColumnsSelector from "./ColumnsSelector";
import { Table } from "@tanstack/react-table";
import { FilterBrokers2 } from "@/app/[locale]/brokers/filter2";
import { ModalFilter } from "./ModalFilter";
import { PopoverFilter } from "./PopoverFilter";
import { DropdownFilter } from "./DropdownFilter";
export interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export default function TopTable<TData>({
  table,
  columnNames,
  filters,
  defaultLoadedColumns
}: {
  table:Table<TData>,
  columnNames:Record<string,string>,
  filters?:any,
  defaultLoadedColumns?:Array<string>
}) {
 
  return (
    <>
      <div className="w-full">
        <div className="flex  items-center py-2">
          <SearchTable />
          <ModalFilter filters={filters} />
          <DropdownFilter filters={filters} />
          <FilterBrokers2 filters={filters.advanced_filters}/>
         
          <PopoverFilter filters={filters.davanced_filters} />
        
          <ColumnsSelector table={table} columnNames={columnNames} defaultLoadedColumns={defaultLoadedColumns}/>
        </div>
      </div>
    </>
  );
}
