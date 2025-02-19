"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export  function Checkboxes({options,
    field,
    name,
    checkedColumns,
    }:{
        options: [{ name: any; value: any }];
        field:string;
        name:string;
        checkedColumns:[];
        
    }) {
 
      const [open, setOpen] = useState(false);

  return (
   
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
    <span onClick={() => setOpen(true)}>{name}</span>
    </PopoverTrigger>
    <PopoverContent forceMount className="relative w-70">
          <ScrollArea className="h-[300px] w-full rounded-md border ">
           <div className="flex-col  items-center ">
             {options.map((option) => {
            let checked=false;
            return (
              
               <div className="px-2 w-full overflow-hidden">
               <Checkbox id={option.value} />
                  <label
               htmlFor={option.value}
                  className="p-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
        {option.name}
      </label>
               </div>
              
                )
              })}
               
        </div>
          </ScrollArea>
          <Button variant="outline" className="mt-2 " onClick={() => setOpen(false)}>
          Close
        </Button>
    </PopoverContent>
    </Popover>
  
    
  )
}
