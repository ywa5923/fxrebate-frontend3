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

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

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

export function FilterBrokers2({ filters }: { filters?: any }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  let [radioFilters, setRadiofilters] = useState({});
  let [checkboxFilters, setCheckboxfilters] = useState({});

  useEffect(() => {
    let urlRadioFilters = {};
    let urlCheckedFilters = {};
    filters.forEach((filter) => {
      if (params.get(filter.field)) {
        if (filter.type == "radio") {
          //handleRadio(filter.field,params.get(filter.field),"radio")
          urlRadioFilters[filter.field] = params.get(filter.field);
        } else if (filter.type == "checkbox") {
          //setCheckboxfilters({...checkboxFilters,[filter.field]:params.get(filter.field)?.split(",")})
          urlCheckedFilters[filter.field] = params
            .get(filter.field)
            ?.split(",");
        }
      }
    });

    setRadiofilters(urlRadioFilters);
    setCheckboxfilters(urlCheckedFilters);
  }, []);
  // console.log("checkboxes",checkboxFilters)
  console.log("radioFilters", radioFilters);
  //  console.log("search params", params.get("payments"))
  let handleRadio = (
    field: string,
    optionValue: any,
    e: any,
    mode?: string
  ) => {
    if (optionValue == null) {
      //this is executed when reset is clicked
      const { [field]: _, ...rest } = radioFilters;
      setRadiofilters(rest);
      params.delete(field);

      // mode ?? replace(`${pathname}?${params.toString()}`);
    } else {
      setRadiofilters({ ...radioFilters, [field]: optionValue });
      params.set(field, optionValue);
    }

    mode ?? replace(`${pathname}?${params.toString()}`);
  };

  let handleCheckbox = (
    field: string,
    optionValue: string,
    checked: boolean,
    mode?: string
  ) => {
    if (
      Array.isArray(checkboxFilters[field]) &&
      checkboxFilters[field].includes(optionValue)
    ) {
      setCheckboxfilters({
        ...checkboxFilters,
        [field]: checkboxFilters[field].filter((o) => o != optionValue),
      });
    } else {
      if (checkboxFilters[field]) {
        setCheckboxfilters({
          ...checkboxFilters,
          [field]: [...checkboxFilters[field], optionValue],
        });
      } else {
        setCheckboxfilters({ ...checkboxFilters, [field]: [optionValue] });
      }
    }

    let oldParam = params.get(field);
    let oldParams: any[] = [];

    if (oldParam) {
      oldParams = oldParam.split(",");
      if (oldParams.includes(optionValue)) {
        oldParams = oldParams.filter((o) => o != optionValue);
      } else {
        oldParams = [...oldParams, optionValue];
      }
    } else {
      oldParams = [optionValue];
    }

    if (oldParams.length == 0) {
      params.delete(field);
    } else {
      params.set(field, oldParams.join(","));
    }

    mode ?? replace(`${pathname}?${params.toString()}`, { scroll: false });

    // checkboxFilters[field]??params.set(field,checkboxFilters[field].join(","))
    //console.log("checkbossssss",field,option,value)
    //console.log(checkboxFilters)
  };

  const resetFilters = () => {
    // Clear all filters
     const params = new URLSearchParams();
    // replace(`${pathname}?${params.toString()}`, { scroll: false });
    setCheckboxfilters({});
    setRadiofilters({});
    params.forEach((value, key) => {
      console.log("key",key)
      if(key.startsWith("filter_"))
        params.delete(key)
    });
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    // alert("reswet_filters");
  };
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

        <Button
          style={{ color: "red" }}
          variant="outline"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>

        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Broker Filters</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ScrollArea className="h-[300px]  rounded-md border ">
            {filters.map((filter, index) => {
              let selectedFilters =
                filter.type === "checkbox"
                  ? checkboxFilters[filter.field]?.length
                  : radioFilters[filter.field]
                  ? 1
                  : null;
              return (
                <DropdownMenuSub key={index}>
                  <DropdownMenuSubTrigger>
                    <span>
                      {filter.name}{" "}
                      {selectedFilters && <b>({selectedFilters})</b>}
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {filter.type === "checkbox" ? (
                        <MultiSelect
                          onClick={handleCheckbox}
                          field={filter.field}
                          options={filter.options}
                          checkedColumns={checkboxFilters[filter.field]}
                        />
                      ) : (
                        <SingleSelect
                          onClick={handleRadio}
                          field={filter.field}
                          options={filter.options}
                          defaultValue={radioFilters[filter.field]}
                        />
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
