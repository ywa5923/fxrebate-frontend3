import Link from "next/link"
import { useState } from 'react'

type Props={
    isMobileMenu?:boolean;
    handleMobileMenu?:()=>void
}
type useStateType={
    status: boolean;
    key?: Number|String;
}
export default function MobileMenu({ isMobileMenu, handleMobileMenu }:Props) {
    const [isActive, setIsActive] = useState<useStateType>({
        status: false,
        key: 1,
    })

    const handleToggle = (key:string) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/img/logo/site-logo-6.svg" alt="" /></Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li>
                            <Link href="#">Home</Link>
                            <span className={isActive.key == 1 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(1)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>

                                <li><Link href="/">Tax Consulting 1</Link></li>
                                <li><Link href="/index-6">Tax Consulting 2</Link></li>
                                <li><Link href="/index-2">Financial Advisor</Link></li>
                                <li><Link href="/index-3">Low Consulting</Link></li>
                                <li><Link href="/index-4">Business Consulting</Link></li>
                                <li><Link href="/index-5">Insurance Consulting</Link></li>
                                <li><Link href="/index-rtl-1">RTL</Link></li>

                                <li><Link href="/single-index-1">Tax Consulting 1</Link></li>
                                <li><Link href="/single-index-6">Tax Consulting 2</Link></li>
                                <li><Link href="/single-index-2">Financial Advisor</Link></li>
                                <li><Link href="/single-index-3">Low Consulting</Link></li>
                                <li><Link href="/single-index-4">Business Consulting</Link></li>
                                <li>
                                    <Link href="/single-index-5">Insurance Consulting</Link>
                                </li>
                                <li><Link href="/single-index-rtl-1">RTL</Link></li>

                            </ul>
                        </li>
                        <li><Link href="#">Service</Link>
                            <span className={isActive.key == 2 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(2)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                <li><Link href="/service-1">Service Default</Link></li>
                                <li><Link href="/service-2">Service 2</Link></li>
                                <li><Link href="/service-3">Service Right</Link></li>
                                <li><Link href="/service-4">Service Left</Link></li>
                                <li><Link href="/single-service-1">Service Details </Link></li>
                                <li><Link href="/single-service-2">Details Right</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">Pages</Link>
                            <span className={isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(3)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href="/about-1">About 1</Link></li>
                                <li><Link href="/about-2">About 2</Link></li>
                                <li><Link href="/blog-1">Classic Blog</Link></li>
                                <li><Link href="/blog-mesonry-1">Mesonry 1</Link></li>
                                <li><Link href="/blog-mesonry-2">Mesonry 2</Link></li>
                                <li><Link href="/blog-mesonry-3">Mesonry 3</Link></li>
                                <li><Link href="/single-1">Single Right</Link></li>
                                <li><Link href="/single-2">Single Default</Link></li>
                                <li><Link href="/single-3">Single Left</Link></li>
                                <li><Link href="/single-4">Single Fuild</Link></li>
                                <li><Link href="/service-1">Service Default</Link></li>
                                <li><Link href="/service-2">Service 2</Link></li>
                                <li><Link href="/service-3">Service Right</Link></li>
                                <li><Link href="/service-4">Service Left</Link></li>
                                <li><Link href="/single-service-1">Service Details </Link></li>
                                <li><Link href="/single-service-2">Details Right</Link></li>
                                <li><Link href="/price-1">Pricing 1</Link></li>
                                <li><Link href="/price-2">Pricing 2</Link></li>
                                <li><Link href="/contact-1">Contact 1</Link></li>
                                <li><Link href="/contact-2">Contact 2</Link></li>
                                <li><Link href="/case-study-1">Case Study 1</Link></li>
                                <li><Link href="/case-study-2">Case Study 2</Link></li>
                                <li><Link href="/single-case-study-1">Single Case</Link></li>
                                <li><Link href="/case-study-3">Case Study Right</Link></li>
                                <li><Link href="/case-study-4">Case Study Left</Link></li>
                                <li><Link href="/testimonial-1">Testimonial</Link></li>
                                <li><Link href="/faq-1">FAQ</Link></li>
                                <li><Link href="/team-1">Team</Link></li>
                                <li><Link href="/career-1">Carrer 1</Link></li>
                                <li><Link href="/shop-1">Shop 1</Link></li>
                                <li><Link href="/shop-2">Shop 2</Link></li>
                                <li><Link href="/shop-3">Shop 3</Link></li>
                                <li><Link href="/shop-inner-1">Shop Single</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/cart-empty">Cart Empty</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                                <li><Link href="/singup">Sign Up</Link></li>
                                <li><Link href="/signin">Sign In</Link></li>
                                <li><Link href="/forgot">Forgot</Link></li>
                                <li><Link href="/404">404 Error</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">Case Study</Link>
                            <span className={isActive.key == 4 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(4)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                <li><Link href="/case-study-1">Case Study 1</Link></li>
                                <li><Link href="/case-study-2">Case Study 2</Link></li>
                                <li><Link href="/case-study-3">Case Study 3</Link></li>
                                <li><Link href="/case-study-4">Case Study 4</Link></li>
                                <li><Link href="/single-case-study-1">Single Case</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">Shop</Link>
                            <span className={isActive.key == 5 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(5)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                <li><Link href="/forgot">Forgot</Link></li>
                                <li><Link href="/shop-1">Shop 1</Link></li>
                                <li><Link href="/shop-2">Shop 2</Link></li>
                                <li><Link href="/shop-3">Shop 3</Link></li>
                                <li><Link href="/shop-inner-1">Shop Single</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/cart-empty">Cart Empty</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                                <li><Link href="/singup">Sign Up</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">Contact</Link>
                            <span className={isActive.key == 6 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(6)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                <li><Link href="/contact-1">Contact 1</Link></li>
                                <li><Link href="/contact-2">Contact 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mobile-contact">
                        <div className="single-footer">
                            <h3>Get in touch</h3>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-phone4.svg" alt="" />
                                    </div>
                                    <Link href="#">USA: +91 02 2585 0556</Link>
                                    <Link href="#">UK: +61 02 2585 0556</Link>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" />
                                    </div>
                                    <Link href="#">Contacthelp@Demoui.co</Link>
                                    <Link href="#">Info@consultia.co</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
