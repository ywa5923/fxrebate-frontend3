"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area";


type Checked = DropdownMenuCheckboxItemProps["checked"]

export  function MultipleSelect({options,
    field,
    name,
    checkedColumns}:{
        options: [{ name: any; value: any }];
        field:string;
        name:string;
        checkedColumns:[];
    }) {
 

  return (
   
    <DropdownMenu modal={false} portalled={false}>
      <DropdownMenuTrigger asChild className="w-full my-2">
        <Button variant="outline">{name}</Button>
      </DropdownMenuTrigger>
      
     
      <DropdownMenuContent className="w-80" >
      
      <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ScrollArea className="h-[300px] w-full rounded-md border ">
          <div>
             {options.map((option) => {
            let checked=false;
            return (
              
               <DropdownMenuCheckboxItem  checked={checked} key={option.value}>{option.name}</DropdownMenuCheckboxItem>
              
                )
              })}
        </div>
          </ScrollArea>
    
       
      </DropdownMenuContent>
      
    </DropdownMenu>
    
  )
}
