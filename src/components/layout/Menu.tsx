"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

const Menu:React.FC<{}> = () => {
    const routerPath = usePathname()
    useEffect(() => {
        if (routerPath == "/index-rtl-1") {
            document.documentElement.lang = "ar"
            document.documentElement.dir = "rtl"
            document.body.classList.add("rtl-version")
        } else {
            document.documentElement.lang = "en"
            document.documentElement.dir = ""
            document.body.classList.remove("rtl-version")
        }
    })
  return (
    <>

            <ul className="menu_list scroll">
                <li className="dropdown-parrent">
                    <Link href="/">Home</Link>
                    <ul className="theme-dropdown">
                        <li className="multi-dropdown-parrent">
                            <Link href="/">Multipage
                                <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" /> </span></Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/">Tax Consulting 1</Link></li>
                                <li><Link href="/index-6">Tax Consulting 2</Link></li>
                                <li>
                                    <Link href="/index-2">Financial Advisor</Link>
                                </li>
                                <li><Link href="/index-3">Low Consulting</Link></li>
                                <li>
                                    <Link href="/index-4">Business Consulting</Link>
                                </li>
                                <li>
                                    <Link href="/index-5">Insurance Consulting</Link>
                                </li>
                                <li><Link href="/index-rtl-1">RTL</Link></li>
                            </ul>
                        </li>
                        <li className="multi-dropdown-parrent">
                            <Link href="/index-2">Landing Page
                                <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" /> </span></Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li>
                                    <Link href="/single-index-1">Tax Consulting 1</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-6">Tax Consulting 2</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-2">Financial Advisor</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-3">Low Consulting</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-4">Business Consulting</Link>
                                </li>
                                <li>
                                    <Link href="/single-index-5">Insurance Consulting</Link>
                                </li>
                                <li><Link href="/single-index-rtl-1">RTL</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="/about-1">Brokers</Link>
                    <ul className="theme-dropdown">
                        <li><Link href="/about-1">Forex Brokers</Link></li>
                        <li><Link href="/about-2">Forex Brokers List</Link></li>
                        <li><Link href="/about-2">Forex Brokers Ratings/Reviews</Link></li>
                        <li  className="multi-dropdown-parrent">
                            <Link href="/about-2">Broker Guides
                               <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" />
                                </span>
                            </Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/blog-1">Broker Guides 1</Link></li>
                                <li><Link href="/blog-2">Broker Guides 2</Link></li>
                                <li><Link href="/blog-3">Broker Guides 3</Link></li>
                                <li><Link href="/blog-mesonry-1">Broker Guides 4</Link></li>
                                <li><Link href="/blog-mesonry-2">Broker Guides 5</Link></li>
                                <li><Link href="/blog-mesonry-3">Broker Guides 6</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/about-2">Best Forex Brokers 2025</Link></li>
                        <li><Link href="/about-2">Broker Promotions</Link></li>
                        <li><Link href="/about-2">Broker Contests</Link></li>
                    </ul>
                </li>
                {/* Cryptos*/}
                <li className="dropdown-parrent"><Link href="/about-1">Cryptos</Link>
                    <ul className="theme-dropdown">
                        <li><Link href="/about-1">Crypto Exchanges</Link></li>
                        <li><Link href="/about-2">Crypto Exchanges List</Link></li>
                        <li><Link href="/about-2">Crypto Exchanges Ratings / Reviews</Link></li>
                        <li  className="multi-dropdown-parrent">
                            <Link href="/about-2">Crypto Guides
                               <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" />
                                </span>
                            </Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/blog-1">Crypto Guides 1</Link></li>
                                <li><Link href="/blog-2">Crypto Guides 2</Link></li>
                                <li><Link href="/blog-3">Crypto Guides 3</Link></li>
                                <li><Link href="/blog-mesonry-1">Crypto Guides 4</Link></li>
                                <li><Link href="/blog-mesonry-2">Crypto Guides 5</Link></li>
                                <li><Link href="/blog-mesonry-3">Crypto Guides 6</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/about-2">Best Crypto Exchanges 2025</Link></li>
                        <li><Link href="/about-2">Crypto Promotions</Link></li>
                        <li><Link href="/about-2">Crypto Contests</Link></li>
                    </ul>
                </li>
              {/* Props */}
              <li className="dropdown-parrent"><Link href="/about-1">Props</Link>
                    <ul className="theme-dropdown">
                        <li><Link href="/about-1">Prop Firms</Link></li>
                        <li><Link href="/about-2">Prop Firms List</Link></li>
                        <li><Link href="/about-2">Prop Firms Ratings / Reviews</Link></li>
                        <li  className="multi-dropdown-parrent">
                            <Link href="/about-2">Prop Firms Guides
                               <span className="multi-drop-icon">
                                    <i className="fa-solid fa-angle-right" />
                                </span>
                            </Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/blog-1">Prop Firms Guides 1</Link></li>
                                <li><Link href="/blog-2">Prop Firms Guides 2</Link></li>
                                <li><Link href="/blog-3">Prop Firms Guides 3</Link></li>
                                <li><Link href="/blog-mesonry-1">Prop Firms Guides 4</Link></li>
                                <li><Link href="/blog-mesonry-2">Prop Firms Guides 5</Link></li>
                                <li><Link href="/blog-mesonry-3">Prop Firms Guides 6</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/about-2">Best Crypto Exchanges 2025</Link></li>
                        <li><Link href="/about-2">Crypto Promotions</Link></li>
                        <li><Link href="/about-2">Crypto Contests</Link></li>
                    </ul>
                </li>
              
                <li className="mega-menu-parrent"><Link href="#">Pages</Link>
                    <ul className="theme-mega-menu">
                        <li className="mega-menu">
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">What We Do</h3>
                                <ul>
                                    <li><Link href="/case-study-1">Case Study 1</Link></li>
                                    <li><Link href="/case-study-2">Case Study 2</Link></li>
                                    <li><Link href="/single-case-study-1">Single Case</Link></li>
                                    <li><Link href="/service-1">Service Default</Link></li>
                                    <li><Link href="/service-2">Service 2</Link></li>
                                    <li><Link href="/service-3">Service Right</Link></li>
                                    <li><Link href="/single-service-1">Service Details </Link>
                                    </li>
                                    <li><Link href="/single-service-2">Details Right</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">News Letter</h3>
                                <ul>
                                    <li><Link href="/blog-1">Classic Blog</Link></li>
                                    <li><Link href="/blog-mesonry-1">Mesonry 1</Link></li>
                                    <li><Link href="/blog-mesonry-2">Mesonry 2</Link></li>
                                    <li><Link href="/blog-mesonry-3">Mesonry 3</Link></li>
                                    <li><Link href="/single-1">Single Right</Link></li>
                                    <li><Link href="/single-2">Single Default</Link></li>
                                    <li><Link href="/single-3">Single Left</Link></li>
                                    <li><Link href="/single-4">Single Fuild</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">WooCommerce</h3>
                                <ul>
                                    <li><Link href="/shop-1">Shop 1</Link></li>
                                    <li><Link href="/shop-2">Shop 2</Link></li>
                                    <li><Link href="/shop-3">Shop 3</Link></li>
                                    <li><Link href="/shop-inner-1">Shop Single</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/cart-empty">Cart Empty</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/singup">Sign Up</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Pages</h3>
                                <ul>
                                    <li><Link href="/about-1">About 1</Link></li>
                                    <li><Link href="/about-2">About 2</Link></li>
                                    <li><Link href="/testimonial-1">Testimonial</Link></li>
                                    <li><Link href="/faq-1">FAQ</Link></li>
                                    <li><Link href="/team-1">Team</Link></li>
                                    <li><Link href="/career-1">Carrer 1</Link></li>
                                    <li><Link href="/404">404 Error</Link></li>
                                    <li><Link href="/signin">Sign In</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Others</h3>
                                <ul>
                                    <li><Link href="/price-1">Pricing 1</Link></li>
                                    <li><Link href="/price-2">Pricing 2</Link></li>
                                    <li><Link href="/contact-1">Contact 1</Link></li>
                                    <li><Link href="/contact-2">Contact 2</Link></li>
                                    <li><Link href="/service-4">Service Left</Link></li>
                                    <li><Link href="/case-study-3">Case Study Right</Link></li>
                                    <li><Link href="/case-study-4">Case Study Left</Link></li>
                                    <li><Link href="/forgot">Forgot</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="#">Blog</Link>
                    <ul className="theme-dropdown">
                        <li className="multi-dropdown-parrent"><Link href="#">Blog <span className="multi-drop-icon">
                            <i className="fa-solid fa-angle-right" />
                        </span></Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/blog-1">Classic</Link></li>
                                <li><Link href="/blog-2">Blog Right</Link></li>
                                <li><Link href="/blog-3">Blog Left</Link></li>
                                <li><Link href="/blog-mesonry-1">Mesonry 1</Link></li>
                                <li><Link href="/blog-mesonry-2">Mesonry 2</Link></li>
                                <li><Link href="/blog-mesonry-3">Mesonry 3</Link></li>
                            </ul>
                        </li>
                        <li className="multi-dropdown-parrent"><Link href="#">Blog Detail <span className="multi-drop-icon">
                            <i className="fa-solid fa-angle-right" />
                        </span></Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/single-2">Single Default</Link></li>
                                <li><Link href="/single-1">Right Sidebar</Link></li>
                                <li><Link href="/single-3">Left Sidebar</Link></li>
                                <li><Link href="/single-4">Single Fuild</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="#">Shop</Link>
                    <ul className="theme-dropdown">
                        <li className="multi-dropdown-parrent"><Link href="#">Shop <span className="multi-drop-icon">
                            <i className="fa-solid fa-angle-right" />
                        </span>
                        </Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/shop-1">Shop Default</Link></li>
                                <li><Link href="/shop-2">Right Sidebar</Link></li>
                                <li><Link href="/shop-3">Left Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="multi-dropdown-parrent"><Link href="#">Others <span className="multi-drop-icon">
                            <i className="fa-solid fa-angle-right" />
                        </span>
                        </Link>
                            <ul className="multi-dropdown theme-dropdown">
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/cart-empty">Cart Empty</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                                <li><Link href="/signup">SignUp</Link></li>
                                <li><Link href="/signin">SignIn</Link></li>
                                <li><Link href="/forgot">Forgot</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/shop-inner-1">Shop Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="/about-1">Contact</Link>
                    <ul className="theme-dropdown">
                        <li><Link href="/contact-1">Contact 1</Link></li>
                        <li><Link href="/contact-2">Contact 2</Link></li>
                    </ul>
                </li>
            </ul>
        </>
  )
}

export default Menu