import React from 'react'
import SearchTable from './SearchTable'
import ColumnsSelector  from './ColumnsSelector'
import { Table } from "@tanstack/react-table"
export interface DataTableViewOptionsProps<TData> {
    table: Table<TData>
  }
  
  
  export default function TopTable<TData>({
    table,
  }: DataTableViewOptionsProps<TData>) {
  return (
    <>
      <div className="w-full">
      <div className="flex  items-center py-2">
     <SearchTable />
     <ColumnsSelector table={table} />
     </div>
     </div>

    </>
  )
}

