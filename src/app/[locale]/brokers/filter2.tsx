
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
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

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

export function FilterBrokers2({filters}:{filters?:any}) {


  // let filters = [
  //   {
  //     field: "rating",
  //     type: "checkbox",
  //     options: [
  //       {
  //         name: "option1",
  //         value: "value1",
  //       },
  //       {
  //         name: "option2",
  //         value: "value2",
  //       },
  //       {
  //         name: "option3",
  //         value: "value3",
  //       },
  //       {
  //         name: "option4",
  //         value: "value4",
  //       },
  //       {
  //         name: "option5",
  //         value: "value5",
  //       },
  //       {
  //         name: "option6",
  //         value: "value6",
  //       },
  //       {
  //         name: "option7",
  //         value: "value7",
  //       },
  //       {
  //         name: "option8",
  //         value: "value8",
  //       },
  //       {
  //         name: "option9",
  //         value: "value9",
  //       },
  //       {
  //         name: "option10",
  //         value: "value10",
  //       },
  //     ],
  //   },
  //   {
  //     field: "payments",
  //     type: "radio",
  //     options: [
  //       {
  //         name: "option1",
  //         value: "value1",
  //       },
  //       {
  //         name: "option2",
  //         value: "value2",
  //       },
  //       {
  //         name: "option3",
  //         value: "value3",
  //       },
  //       {
  //         name: "option8",
  //         value: "value8",
  //       },
  //       {
  //         name: "option9",
  //         value: "value9",
  //       },
  //       {
  //         name: "option10",
  //         value: "value10",
  //       },
  //       {
  //         name: "option11",
  //         value: "value11",
  //       },
  //       {
  //         name: "option12",
  //         value: "value12",
  //       },
  //       {
  //         name: "option13",
  //         value: "value13",
  //       },
  //       {
  //         name: "option15",
  //         value: "value15",
  //       },
  //       {
  //         name: "option16",
  //         value: "value16",
  //       },
  //       {
  //         name: "option17",
  //         value: "value17",
  //       },
  //       {
  //         name: "option18",
  //         value: "value18",
  //       },
  //       {
  //         name: "option19",
  //         value: "value19",
  //       },
  //       {
  //         name: "option4",
  //         value: "value4",
  //       },
  //       {
  //         name: "option5",
  //         value: "value5",
  //       },
  //       {
  //         name: "option6",
  //         value: "value6",
  //       },
  //       {
  //         name: "option7",
  //         value: "value7",
  //       },
  //     ],
  //   },
  // ];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
   let [radioFilters,setRadiofilters]=useState({})
   let [checkboxFilters,setCheckboxfilters]=useState({})

   useEffect(()=>{
      filters.forEach((filter)=>{
        if(params.get(filter.field) ){
          if(filter.type=="radio"){
            handleRadio(filter.field,params.get(filter.field),"radio")
          }else if(filter.type=="checkbox"){
           setCheckboxfilters({...checkboxFilters,[filter.field]:params.get(filter.field)?.split(",")})
            
          }
          
        }
      })

     

      
   },[])
 //  console.log("search params", params.get("payments"))
   let handleRadio=(field:string, value:any,mode?:string)=>{
    if (value) {
      setRadiofilters({...radioFilters,[field]:value})
      params.set(field, value);
    } else {
      params.delete(field);
    }
  
     mode ?? replace(`${pathname}?${params.toString()}`);
   }

   let handleCheckbox=(field:string,option:string,value:any,mode?:string)=>{
    if(Array.isArray(checkboxFilters[field]) && checkboxFilters[field].includes(option)){
      setCheckboxfilters({...checkboxFilters,[field]:checkboxFilters[field].filter((o)=>o!=option)})
    }else{
    if(checkboxFilters[field]){
      setCheckboxfilters({...checkboxFilters,[field]:[...checkboxFilters[field],option]})
      
    }else{
      setCheckboxfilters({...checkboxFilters,[field]:[option]})
     
    }
    
  }
 
  let oldParam=params.get(field);
  let oldParams:any[]=[];
  
  if(oldParam){
     oldParams=oldParam.split(",");
    if(oldParams.includes(option)){
      oldParams=oldParams.filter((o)=>o!=option);
    }else{
      oldParams=[...oldParams,option]
    }
   
  }else{
    oldParams=[option]
  }
 
  params.set(field,oldParams.join(","))
 mode??replace(`${pathname}?${params.toString()}`, {scroll:false});
 
 // checkboxFilters[field]??params.set(field,checkboxFilters[field].join(","))
       //console.log("checkbossssss",field,option,value)
//console.log(checkboxFilters)
   }

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
                        <MultiSelect onClick={handleCheckbox} field={filter.field} options={filter.options} checkedColumns={checkboxFilters[filter.field]} />
                      ) : (
                        <SingleSelect onClick={handleRadio} field={filter.field} options={filter.options} defaultValue={radioFilters[filter.field]} />
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
