"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RatingComponent } from "./RatingComponent";
import { FilterField, FilterOption } from "@/types";

export function CustomSelectBox({
  filter: { options, name, field, type, expanded },
  selected,
}: {
  filter: FilterField;
  selected: string[] | [];
}) {
  const [open, setOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>(selected || []);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if(JSON.stringify(selected)!==JSON.stringify(checkedItems))
    setCheckedItems([...selected]);
  }, [selected]);

  useEffect(() => {
    if (params.has("page")) params.delete("page");

    if(checkedItems.length===0) {
      params.delete(field);
    }else{
      const paramsArray = new Set(checkedItems);
      params.set(field, Array.from(paramsArray).join(","));
    }
    
    replace(`${pathname}?${params}`);
  }, [checkedItems]);

  const handleCheckedChange = (
    checked: boolean | string,
    value: string
  ) => {
    (checked)?setCheckedItems([...checkedItems, value]):setCheckedItems(checkedItems.filter((item) => item !== value)); 
  };

  return (
    <div className="w-[93%]">
      <Button
        variant="outline"
        className="mt-2 w-full"
        {...(!expanded && { onClick: () => setOpen(!open) })}
      >
        {name} {checkedItems.length ? `(${checkedItems.length})` : ""}
      </Button>
      <ScrollArea className="max-h-[200px] rounded-md border scrollbar-thin overflow-y-auto">
        {(open || expanded) && (
          <div>
            {type === "radio" || type === "rating" ? (
              <RadioGroup
                onValueChange={(value) => handleCheckedChange(true, value)}
                defaultValue={selected?.[0] ?? ""}
              >
                {options &&options?.map((option) => (
                  <div className="flex items-center space-x-2" key={option.value}>
                    <RadioGroupItem id={option.value} value={option.value} />
                    <label htmlFor={option.value} className="text-sm font-medium">
                      {option.name}
                    </label>
                    {type === "rating" && <RatingComponent />}
                  </div>
                ))}
              </RadioGroup>
            ) : (
              // Render Checkboxes if type is "checkbox"
              options?.map((option) => {
                const checked = selected.includes(option.value);
                return (
                  <div className="flex items-center space-x-2 p-1" key={option.value}>
                    <Checkbox
                      id={option.value}
                      defaultChecked={checked}
                      onCheckedChange={(checked) => handleCheckedChange(checked, option.value)}
                    />
                    <label htmlFor={option.value} className="text-sm font-medium">
                      {option.name}
                    </label>
                  </div>
                );
              })
            )}
          </div>
        )}
      </ScrollArea>
      <div className="flex flex-wrap flex-col gap-1 m-2">
        {!expanded &&
          checkedItems.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-full bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800"
            >
              {options?.find((option) => option.value === item)?.name}
              <span
                onClick={() => {
                  handleCheckedChange(false, item);
                  setCheckedItems((prev) => prev.filter((i) => i !== item));
                  setOpen(false);
                }}
                className="font-bold cursor-pointer ml-2"
              >
                ×
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
