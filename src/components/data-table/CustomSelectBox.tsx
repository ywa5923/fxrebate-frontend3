"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "../ui/button";
import { FilterField } from "@/types";
import { FilterOption } from "@/types";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {RatingComponent} from "./RatingComponent";

export function CustomSelectBox({
  filter: { options, name, field },
  selected,
  type,
}: {
  filter: FilterField;
  selected: string[] | string | null;
  type: "checkbox" | "radio";
}) {
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const onCheckedChange = (
    checked: boolean | string,
    value: string,
    field: string,
    type: string
  ) => {
    if (params.has("page")) {
      params.delete("page");
    }
    const paramsArray = new Set(params.get(field)?.split(",") || []);
    if (checked) {
        (type === "radio") && paramsArray.clear();
        paramsArray.add(value);   
    } else {
      paramsArray.delete(value);
      if (paramsArray.size == 0) {
        params.delete(field);
        replace(`${pathname}?${params.toString()}`);
        return;
      }
    }

    params.set(field, Array.from(paramsArray).join(","));
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="w-[93%]">
      <Button
        variant="outline"
        className="mt-2 w-full"
        onClick={() => setOpen(!open)}
      >
        {name}
      </Button>
      <ScrollArea className="max-h-[200px]  rounded-md border scrollbar-thin scrollbar overflow-y-auto">
        <div className="">
          {open &&
            options &&
            (type === "radio" ? (
              // Render RadioGroup if type is "radio"
              <RadioGroup
                onValueChange={(value) => onCheckedChange(true, value, field, type)}
                defaultValue={selected?.[0] ?? ""}
              >
                {options.map((option: FilterOption, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem
                      id={`${option.value}`}
                      value={option.value}
                    />
                    <label
                      htmlFor={`${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.name}
                    </label>
                    <RatingComponent key={index+"ds"}/>
                  </div>
                   
                ))}
              </RadioGroup>
            ) : (
              // Render Checkboxes if type is "checkbox"
              options.map((option: FilterOption, index) => {
                const checked = selected?.includes(option.value) ?? false;
                return (
                  <div className="flex items-center space-x-2 p-1" key={index}>
                    <Checkbox
                      id={`${option.value}`}
                      defaultChecked={checked}
                      onCheckedChange={(checked) =>
                        onCheckedChange(checked, option.value, field, type)
                      }
                    />
                    <label
                      htmlFor={`${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.name}
                    </label>
                  </div>
                );
              })
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
