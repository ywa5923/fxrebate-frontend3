
'use client'

import AOS from "aos";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Header1 from "./header/Header1";
import MobileMenu from "./MobileMenu";
import Footer1 from "./footer/Footer1";
import Breadcrumb from "./Breadcrumb";

interface Props {
    headerStyle: Number;
    footerStyle: Number;
    headTitle?:string;
    breadcrumbTitle?:string
    children?:React.ReactNode;
  }

export default function Layout({ headerStyle, footerStyle,headTitle,breadcrumbTitle,children }:Props) {
    const [scroll, setScroll] = useState<boolean>(false)
    // Moblile Menu
   const [isMobileMenu, setMobileMenu] = useState(false)
   const handleMobileMenu = () => setMobileMenu(!isMobileMenu)
   
    useEffect(() => {
       
        AOS.init()
        const handleScroll: EventListener = (event: Event) => {
         
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
    
       document.addEventListener("scroll", handleScroll);
    
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };


    }, [])

    return (
        <>
       
        {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
        <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
        

        {footerStyle == 1 ? < Footer1 /> : null}
        <BackToTop scroll={scroll} />
        </>
    )
}
