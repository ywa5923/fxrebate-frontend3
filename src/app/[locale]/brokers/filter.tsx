"use client";
import { Copy } from "lucide-react";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ManySelect from "./ManySelect";

export function FilterBrokers() {
  let options = [
    {
      field: "rating",
      type: "checkbox",
      options: [
        {
          name: "option1",
          value: "options1",
        },
        {
          name: "option2",
          value: "options2",
        },
        {
          name: "option3",
          value: "options3",
        },
      ],
    },
    {
      field: "payments",
      type: "radio",
      options: [
        {
          name: "option1",
          value: "options1",
        },
        {
          name: "option2",
          value: "options2",
        },
        {
          name: "option3",
          value: "options3",
        },
      ],
    },
  ];
  return (
    <Dialog modal defaultOpen={true}>
      <DialogTrigger asChild>
        <Button variant="outline">Show Filters</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
          <DialogDescription>
            Choose one or many from filters below
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-1">
          <div className="grid flex-1 gap-1">
            <DropdownMenu>
              <DropdownMenuContent>
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem>Status Bar</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem disabled>
                  Activity Bar
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
