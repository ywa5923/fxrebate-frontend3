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
import { FilterForm } from "./FilterForm";

export function ModalFilter({filters}:{filters:any}) {


  return (
   
   
    <Dialog modal={true} >
      
      <DialogTrigger asChild>
        <Button variant="outline">Filter Brokers</Button>
      </DialogTrigger>
    
     
      <DialogContent  className="sm:max-w-[300px] h-[800px] overflow-x-hidden overflow-y-scroll">
     
        <DialogHeader>
          <DialogTitle> Broker filters</DialogTitle>
          <DialogDescription>
           
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-0 max-w-full">
       
        <FilterForm filters={filters}/>
         </div>
         
     
    
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      
       
      
      </DialogContent>
      
     
     
      
    </Dialog>
    
  )
}
