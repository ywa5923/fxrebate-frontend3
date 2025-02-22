import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  import { MultipleSelect } from "./MultipleSelect";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Checkboxes } from "./Checkboxes";
import  {CustomSelectBox}  from "./CustomSelectBox";


export function PopoverFilter({filters}:{filters:any}) {
  

  return (
   
   

    <Popover modal={false}>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
    <ScrollArea className="h-[500px] w-full rounded-md  border overflow-auto">
       <div className="p-4 ">
        {filters && filters.map((filter:any, index:number) => {
          return (


    /* <Checkboxes options={filter.options} field={filter.field} name={filter.name} checkedColumns={filter.checkedColumns}  key={index}/> */

           <CustomSelectBox options={filter.options} field={filter.field} fieldName={filter.name} checkedValues={filter.checkedColumns} key={index}/>
          )
        })}
         </div>
     </ScrollArea>
     </PopoverContent>
     </Popover>
        
     
     
     
    
  )
}
