"use client"
import Link from 'next/link'
import {usePathname,useParams} from 'next/navigation'
import clsx from 'clsx'
export default function TabLinks()
{
    const pathname=usePathname();
    const params = useParams()

   
    const links=[
        {
            href:`/${params.locale}/brokers/${params.id}/${params.broker_name}/review`,
            label:"Review"
        },
        {
          href:`/${params.locale}/brokers/${params.id}/${params.broker_name}/user-reviews`,
          label:"User Reviews" 
        },
        {
            href:`/${params.locale}/brokers/${params.id}/${params.broker_name}/rebates`,
            label:"Rebates"
        },
        {
            href:`/${params.locale}/brokers/${params.id}/${params.broker_name}/regulation`,
            label:"Regulation"
        },
        {
          href:`/${params.locale}/brokers/${params.id}/${params.broker_name}/forum`,
          label:"Forum"
      }
    ]
    
    return (
        <>
        {links.map((link) => {
         
          return (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                " font-medium p-2 m-1 bg-primary bg-gradient text-white",
                {
                  'bg-secondary bg-gradient': pathname === link.href,
                },
              )}
            >
          
              {link.label}
            </Link>
          );
        })}
      </>
    )
}