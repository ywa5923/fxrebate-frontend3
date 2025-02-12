import Link from 'next/link'

import TabLinks from './TabLinks';
 
export default function Layout({ children }: { children: React.ReactNode }) {
 
  return (
    <>
      <TabLinks/>
      <div>{children}</div>
    </>
  )
}