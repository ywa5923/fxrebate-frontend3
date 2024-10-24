import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

const SingleSelect = ({
  options,
  onClick,
  field,
  defaultValue
}: {
  options: [{ name: any; value: any }];
  onClick:(field:string,e:any)=>void;
  field:string,
  defaultValue:string
}) => {
  const [defaultValue1, setDefaultValue] = React.useState(defaultValue);
  

  return (
    <ScrollArea className="h-[300px]  rounded-md border ">
       <DropdownMenuRadioItem
              value={"123"}
              key={1234}
              onSelect={(e) => {
                e.preventDefault();
                onClick(field,null)
               setDefaultValue(null)
              }}
            >
             [X] Reset
              {/*{field} Remove filter*/}
            </DropdownMenuRadioItem>
      <DropdownMenuRadioGroup value={defaultValue1} onValueChange={setDefaultValue}>
     
        {options.map((op, key) => {
        
          return (
            <DropdownMenuRadioItem
              value={op.value}
              
              
              key={key}
              onSelect={(e) => {
                e.preventDefault();
                onClick(field,op.value,e)
              }}
            >
              {op.name}
            </DropdownMenuRadioItem>
          );
        })}
      </DropdownMenuRadioGroup>
    </ScrollArea>
  );
};

export default SingleSelect;
