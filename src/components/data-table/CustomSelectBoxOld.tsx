"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RatingComponent } from "./RatingComponent";
import { FilterField, FilterOption } from "@/types";

export function CustomSelectBoxOld({
  filter: { options, name, field, type, expanded },
  selected,
}: {
  filter: FilterField;
  selected?: string[] | null;
}) {
  const [open, setOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    setCheckedItems(selected ? [...selected] : []);
  }, [selected]);

  const handleCheckedChange = (
    checked: boolean | string,
    value: string,
    field: string,
    type: string
  ) => {
    if (params.has("page")) params.delete("page");

    const paramsArray = new Set(params.get(field)?.split(",") || []);
    if (checked) {
      if (type === "radio") paramsArray.clear();
      paramsArray.add(value);
    } else {
      paramsArray.delete(value);
      if (!paramsArray.size) {
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
        {...(!expanded && { onClick: () => setOpen(!open) })}
      >
        {name} {checkedItems.length ? `(${checkedItems.length})` : ""}
      </Button>
      <ScrollArea className="max-h-[200px] rounded-md border scrollbar-thin overflow-y-auto">
        {(open || expanded) && (
          <div>
            {type === "radio" || type === "rating" ? (
              <RadioGroup
                onValueChange={(value) => handleCheckedChange(true, value, field, type)}
                defaultValue={selected?.[0] ?? ""}
              >
                {options?.map((option) => (
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
                const checked = checkedItems.includes(option.value);
                return (
                  <div className="flex items-center space-x-2 p-1" key={option.value}>
                    <Checkbox
                      id={option.value}
                      defaultChecked={checked}
                      onCheckedChange={(checked) => handleCheckedChange(checked, option.value, field, type)}
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
                  handleCheckedChange(false, item, field, type);
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