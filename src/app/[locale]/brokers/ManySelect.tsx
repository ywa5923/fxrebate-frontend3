
import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const MultiSelect = ({
  options,
  onClick,
  field,
  checkedColumns
}: {
  options: [{ name: any; value: any }];
  onClick:(field:string,option:string,e:any)=>void;
  field:string,
  checkedColumns:[]
}) => {
  //const [checkedColumns, setCheckedColumns] = React.useState([]);
 

  return (
    <>
      <ScrollArea className="h-[300px]  rounded-md border ">
        {options.map((op, key) => {

         
           let isChecked = checkedColumns?.find((c) => c === op.value);
           let checkedValue = isChecked ? true : false;
          // let isChecked:boolean;
          // if(checkedColumns.includes(op.value)){
          //    isChecked=true
          // }else{
          //   isChecked=false
          // }

          return (
            <DropdownMenuCheckboxItem
              key={key}
              className="capitalize"
              checked={checkedValue}
              onSelect={(e) => {
                e.preventDefault();
              }}
              onCheckedChange={(checked) => {
                // setCheckedColumns((prev) => {
                //   let found = prev.find((item, index) => {
                //     if (item.option === op.name) {
                //       prev[index] = { option: op.name, checked: value };

                //       return true;
                //     }
                //   });

                //   if (found) {
                //     return [...prev];
                //   } else {
                //     return [...prev, { option: op.name, checked: value }];
                //   }
                // });

               onClick(field,op.value,checked)
              }}
            >
              {op.name}
            </DropdownMenuCheckboxItem>
          );
        })}
      </ScrollArea>
    </>
  );
};

export default MultiSelect;
