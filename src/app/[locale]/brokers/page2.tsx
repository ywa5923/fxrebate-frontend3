"use server"

import { AutoTable } from "@/components/data-table/AutoTable"
import  Pagination  from "@/components/elements/Pagination"
import Layout from "@/components/layout/Layout"

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      // address:"Address3"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
       //address:"Address2"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      //address:"Address1"
    }
    // ...
  ]
}

export default async function BrokerPage() {
  const data = await getData()

  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>



    <div className="container mx-auto py-10">
   
    <AutoTable  data={data} />
    <Pagination totalPages={15} />
    </div>
   
    </Layout>
  </>
  )
}
