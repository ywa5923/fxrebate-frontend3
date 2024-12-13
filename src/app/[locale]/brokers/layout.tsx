export default function BrokerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div> 
        <div  className="single-blog-area padding-top inner-font-1 inner-blog-1" id="home" >
         
          {children}
        </div>
      </div>
    </>
  );
}
