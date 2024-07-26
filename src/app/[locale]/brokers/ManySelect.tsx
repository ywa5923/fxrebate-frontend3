"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const MultiSelect = ({ options }: { options: [{ name: any; value: any }] }) => {
  const [checkedColumns, setCheckedColumns] = React.useState([]);

  return (
    <>
      <ScrollArea className="h-[300px]  rounded-md border ">
        {options.map((op, key) => {
          let option = checkedColumns.find((c) => c.option === op.name);
          let checkedValue = option ? option.checked : false;

          return (
            <DropdownMenuCheckboxItem
              key={key}
              className="capitalize"
              checked={checkedValue}
              onSelect={(e) => {
                e.preventDefault();
              }}
              onCheckedChange={(value) => {
                setCheckedColumns((prev) => {
                  let found = prev.find((item, index) => {
                    if (item.option === op.name) {
                      prev[index] = { option: op.name, checked: value };

                      return true;
                    }
                  });

                  if (found) {
                    return [...prev];
                  } else {
                    return [...prev, { option: op.name, checked: value }];
                  }
                });
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
