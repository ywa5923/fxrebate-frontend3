"use client"
import * as React from "react"
import {useEffect} from "react"
import TopTable from "./TopTable"
import { ArrowUpDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

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
  data: TData[]
}
//  columns: ColumnDef<TData, TValue>[]
export function AutoTable<TData, TValue>({
  data
}: DataTableProps<TData, TValue>) {

  let sortableKeys:Array<string>=["amount","email"];
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
                    replace(`${pathname}?${params.toString()}`);
                  }}
                >
                  {key}
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            }else{
              return (
                <>{key}</>
              )
            }
            
        }
      }
    })
  
  const [sorting, setSorting] = React.useState<SortingState>([])

  useEffect(()=>{
    console.log("sorting",sorting)
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
    <TopTable table={table} />
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
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
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
