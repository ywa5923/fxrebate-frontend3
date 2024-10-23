import React from "react";
import SearchTable from "./SearchTable";
import ColumnsSelector from "./ColumnsSelector";
import { Table } from "@tanstack/react-table";
import { FilterBrokers2 } from "@/app/[locale]/brokers/filter2";
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
          <FilterBrokers2 filters={filters}/>
          <ColumnsSelector table={table} columnNames={columnNames} defaultLoadedColumns={defaultLoadedColumns}/>
        </div>
      </div>
    </>
  );
}
