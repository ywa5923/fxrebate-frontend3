import { redirect } from 'next/navigation'
export default function BrokerPage({ children,params }: { 
    children: React.ReactNode,
    params:{id:number,locale:string,broker_name:string} 
}) {
    redirect(`/${params.locale}/brokers/${params.id}/${params.broker_name}/rebates`)
}