"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CustomSelectBox } from "./CustomSelectBox";
import { FilterField } from "@/types";
import {FilterForm} from "./FilterForm";

export function DropdownFilter({ filters }: { filters: FilterField[] }) {

    return (
        <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              style={{ backgroundColor: "orange", color: "black" }}
              variant="outline"
            >
              Brokers Filters
            </Button>
          </DropdownMenuTrigger>
         
          <DropdownMenuContent className="w-[250px]">
            
            <DropdownMenuLabel>Broker Filters</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="h-[600px]  rounded-md border ">
             <FilterForm filters={filters}/>

            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
    
}