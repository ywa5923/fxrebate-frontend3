"use client"
import * as React from "react"
import {useEffect} from "react"
import TopTable from "./TopTable"
import { ArrowUpDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from "next/link"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




interface DataTableProps<TData, TValue> {
  data: TData[],
  columnNames:Record<string,string>,
  filters?:any
}
//  columns: ColumnDef<TData, TValue>[]
export function AutoTable<TData, TValue>({
  data,
  columnNames,
  filters
}: DataTableProps<TData, TValue>) {

  let sortableKeys:Array<string>=Object.keys(columnNames);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

   let columns:ColumnDef<TData>[]= Object.keys(data[0] as {}).map((key:string):ColumnDef<TData>=>{
        return {
          accessorKey: key,
          header: ({ column }) => {
            if(sortableKeys.includes(key)){
              return (
                <Button
                  variant="ghost"
                  onClick={() => {
                    column.toggleSorting(column.getIsSorted() === "asc")
                    const params = new URLSearchParams(searchParams);

                    params.set('sortBy', key);
                    params.set('sortOrder', (column.getIsSorted() === "asc")?"desc":"asc");
                    params.delete("page");
                    replace(`${pathname}?${params.toString()}`);
                  }}
                >
                  {columnNames[key]?columnNames[key]:key}
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            }else{
              return (
                <>{columnNames[key]?columnNames[key]:key}</>
              )
            }
            
        }
      }
    })
  
  const [sorting, setSorting] = React.useState<SortingState>([])

  useEffect(()=>{
   // console.log("sorting",sorting)
  },[sorting])

  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    }
  })

  return (
    <>
    <TopTable table={table} columnNames={columnNames} filters={filters}/>
    <div className="rounded-md border">
     
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                
                 if(cell.column.columnDef.accessorKey=="trading_name"){
                  const [name, url] = cell.getValue().split("**##**");
                  return (<TableCell key={cell.id} className="text-center"> {flexRender(<Link href={url as string } target="_blank">{name}</Link>,cell.getContext())}</TableCell>)
                 }
                  return (<TableCell key={cell.id} className="text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                   </TableCell>)
                 
                  
})}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    </>
  )
}
