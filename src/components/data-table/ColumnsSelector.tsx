"use client"
import {useEffect, useState} from "react"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import {ColumnDef} from "@tanstack/react-table";
import { Button } from "@/components/ui/button"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { ScrollArea } from "@/components/ui/scroll-area"
import { DataTableViewOptionsProps } from "./TopTable"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"



export default function ColumnsSelector<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {

    //let brokerColumns=["id","amount","status","email","address","rating"]
    let brokerColumns=["id","amount","status","email","address","rating","id","amount","status","email","address","rating","id","amount","status","email","address","rating","id","amount","status","email","address","rating","id","amount","status","email","address","rating","id","amount","status","email","address","rating","MUIE"]

    const [checkedColumns,setCheckedColumns]=useState([])
    const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
   
    useEffect(()=>{
      console.log("checked columns",checkedColumns)
      const params = new URLSearchParams(searchParams);
      let cols=[];
      checkedColumns.forEach(element => {
        if(element.checked){
          cols.push(element.column)
        }
      });
     params.set("columns",cols.toString())
      replace(`${pathname}?${params.toString()}`);
    },[checkedColumns])

    let tableColumns:ColumnDef<TData>[]=table
      .getAllColumns()
      .filter(
        (column) =>
          typeof column.accessorFn !== "undefined" && column.getCanHide()
      );
   
  return (
    <>
   
  
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto  h-8 lg:flex"
        >
          {/* removed class hidden from above */}
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          View
        </Button>
        
      </DropdownMenuTrigger>
     
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px]  rounded-md border ">
        {brokerColumns.map((brokerColumn,index)=>{

            let isChecked=tableColumns.find((column)=>column.id===brokerColumn)?true:false
            let col=checkedColumns.find((c)=>c.column===brokerColumn)
            let checkedValue=col?col.checked:false
            
            return (
                <DropdownMenuCheckboxItem
                  key={index}
                  className="capitalize"
                  checked={checkedValue}
                  onSelect={(e) => {
                    e.preventDefault()
  
                
                }}
                  onCheckedChange={(value) => {
                  
                      setCheckedColumns((prev)=>{
                        let found=prev.find((item,index)=>{
                          if(item.column===brokerColumn){
                          
                            prev[index]={column:brokerColumn,checked:value};
                           
                            return true
                          }
                        })

                        if(found){
                          return [...prev]
                        }else{
                          return [...prev,{column:brokerColumn,checked:value}]
                        }

                      
                      });
                   //  return column.toggleVisibility(!!value)
                  
                  }}
                >
                  {brokerColumn}
                </DropdownMenuCheckboxItem>
              )
        })}
</ScrollArea>

      </DropdownMenuContent>
      
    </DropdownMenu>

    </>
    
  )
}
