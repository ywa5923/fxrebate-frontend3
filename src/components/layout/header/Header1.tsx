import React from 'react'
import Link from "next/link"
import Menu from '../Menu'
type Props={
    scroll:boolean;
    isMobileMenu:boolean;
    handleMobileMenu:()=>void
}

const Header1:React.FC<Props> = ({ scroll, isMobileMenu, handleMobileMenu }) => {
  return (
    <>
    <header id="header" className={`header header-2 header-absolute d-none d-lg-block ${scroll ? "sticky" : ""}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-elements">
                        <div className="header_menu_area">
                            <div className="logo">
                                <Link href="/"><img src="/assets/img/logo/site-logo-3.svg" alt="" /></Link>
                            </div>
                            <div className="main-menu">
                                <div className="menu-wrap">
                                    <Menu />
                                </div>
                            </div>
                        </div>
                        <div className="desktop-info">
                            <div className="quick_contact">
                                <div className="quick_contact_icon bg-27">
                                    <i className="fa-light fa-phone" />
                                </div>
                                <div className="quick_contact_content">
                                    <small>Hotline 24/7</small>
                                    <Link href="/tel:+49 30 923325544">+49 30 923325544</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

</>
  )
}

export default Header1