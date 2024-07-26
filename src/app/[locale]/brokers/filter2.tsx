"use client";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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

import SingleSelect from "./SingleSelect";
import MultiSelect from "./ManySelect";

export function FilterBrokers2() {
  let filters = [
    {
      field: "rating",
      type: "checkbox",
      options: [
        {
          name: "option1",
          value: "value1",
        },
        {
          name: "option2",
          value: "value2",
        },
        {
          name: "option3",
          value: "value3",
        },
        {
          name: "option4",
          value: "value4",
        },
        {
          name: "option5",
          value: "value5",
        },
        {
          name: "option6",
          value: "value6",
        },
        {
          name: "option7",
          value: "value7",
        },
        {
          name: "option8",
          value: "value8",
        },
        {
          name: "option9",
          value: "value9",
        },
        {
          name: "option10",
          value: "value10",
        },
      ],
    },
    {
      field: "payments",
      type: "radio",
      options: [
        {
          name: "option1",
          value: "value1",
        },
        {
          name: "option2",
          value: "value2",
        },
        {
          name: "option3",
          value: "value3",
        },
        {
          name: "option8",
          value: "value8",
        },
        {
          name: "option9",
          value: "value9",
        },
        {
          name: "option10",
          value: "value10",
        },
        {
          name: "option11",
          value: "value11",
        },
        {
          name: "option12",
          value: "value12",
        },
        {
          name: "option13",
          value: "value13",
        },
        {
          name: "option15",
          value: "value15",
        },
        {
          name: "option16",
          value: "value16",
        },
        {
          name: "option17",
          value: "value17",
        },
        {
          name: "option18",
          value: "value18",
        },
        {
          name: "option19",
          value: "value19",
        },
        {
          name: "option4",
          value: "value4",
        },
        {
          name: "option5",
          value: "value5",
        },
        {
          name: "option6",
          value: "value6",
        },
        {
          name: "option7",
          value: "value7",
        },
      ],
    },
  ];
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
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Broker Filters</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ScrollArea className="h-[300px]  rounded-md border ">
            {filters.map((filter, index) => {
              return (
                <DropdownMenuSub key={index}>
                  <DropdownMenuSubTrigger>
                    <span>{filter.field}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {filter.type === "checkbox" ? (
                        <MultiSelect options={filter.options} />
                      ) : (
                        <SingleSelect options={filter.options} />
                      )}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              );
            })}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
