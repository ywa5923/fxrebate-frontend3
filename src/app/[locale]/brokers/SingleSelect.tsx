import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

const SingleSelect = ({
  options,
}: {
  options: [{ name: any; value: any }];
}) => {
  const [position, setPosition] = React.useState(options[0].value);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa", position);
  return (
    <ScrollArea className="h-[300px]  rounded-md border ">
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        {options.map((op, key) => {
          return (
            <DropdownMenuRadioItem
              value={op.value}
              onSelect={(e) => {
                e.preventDefault();
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
