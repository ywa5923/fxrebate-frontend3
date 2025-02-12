import TabLinks from "./@broker_tabs/TabLinks";
export default function Layout({
  children,
  broker_tabs,
}: Readonly<{
  children: React.ReactNode,
  broker_tabs: React.ReactNode
}>) {
  return (
    <>
      <div className="container">
        <div className="">{broker_tabs}</div>
        {children}
      </div>
    </>
  );
}
