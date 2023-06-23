"use client"

import Image from "next/image";

import { Link } from "react-scroll/modules";

const Footer = () => {
    return ( 
        <div className="flex mt-10 border-t border-gray-100 md:flex-row flex-col">
            <div className="flex flex-wrap px-10 py-10 gap-20 md:justify-between flex-1">
                <div className="flex flex-col md:justify-start items-start gap-6">
                    <Image src="/nav_logo.png" alt='arctech logo' className='object-contain' width={83} height={16}/>
                    <p className="text-base text-gray-700">Arctech 2023 <br/> All rights reserved &copy;</p>
                </div>

                <div className="flex mr-20 md:gap-40 gap-10">
                    <div className="flex flex-col gap-6 text-lg mr-6">
                        <h3 className="">About</h3>
                        <Link to="info" smooth={true} duration={2000} className="text-gray-500 cursor-pointer">How it works</Link>
                        <Link to="benefits" smooth={true} duration={1000} offset={-140} className="text-gray-500 cursor-pointer">Why us</Link>
                        <Link to="disclosure" smooth={true} duration={1000} className="text-gray-500 cursor-pointer">FAQ</Link>
                    </div>
                    <div className="flex flex-col gap-6 text-lg">
                        <h3 className="">Arctech</h3>
                        <Link to="form" smooth={true} duration={900} className="text-gray-500 cursor-pointer">Contact us</Link>
                        <Link to="carousel" smooth={true} duration={750} offset={-70} className="text-gray-500 cursor-pointer">Our Work</Link>
                        <Link to="hero" smooth={true} duration={2000} offset={-140} className="text-gray-500 cursor-pointer">Landing</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;