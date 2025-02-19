"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogOverlay
} from "@/components/ui/dialog"
import { useRef } from "react";

import { MultipleSelect } from "./MultipleSelect";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Checkboxes } from "./Checkboxes";
import { CustomSelectBox } from "./CustomSelectBox";


export function ModalFilter({filters}:{filters:any}) {


  return (
   
   
    <Dialog modal={true} >
      
      <DialogTrigger asChild>
        <Button variant="outline">Filter Brokers</Button>
      </DialogTrigger>
    
     
      <DialogContent  className="sm:max-w-[325px]  overflow-y-auto">
     
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Broker filters
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] w-full rounded-md border ">
        <div className="p-4">
       
        {filters && filters.map((filter:any, index:number) => {
          return (
            
            /*<MultipleSelect options={filter.options} field={filter.field} name={filter.name} checkedColumns={filter.checkedColumns}  key={index}/>*/
            <CustomSelectBox options={filter.options} field={filter.field} fieldName={filter.name} checkedValues={filter.checkedColumns} key={index}/>

          )
        })}
         </div>
     
    
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      
       </ScrollArea>
      
      </DialogContent>
      
     
     
      
    </Dialog>
    
  )
}
