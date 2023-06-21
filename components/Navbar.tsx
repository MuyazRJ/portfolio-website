"use client"

import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

import { Link as ScrollLink } from "react-scroll/modules";


const Navbar = () => {
    return (  
        <header className='w-[full] h-[80px] mx-auto inset-0 bg-main-black flex justify-center z-20 fixed'>
            <nav className="w-full h-full flex justify-between items-center py-4">
                <Link href='/' className='flex justify-center items-center ml-10'>
                    <Image
                        src="/logo.png"
                        alt='apollo logo'
                        className='object-contain'
                        width={83}
                        height={16}
                    />
                </Link>
             
                <ul className='flex gap-16 flex-1 justify-center'>
                    <li className='nav-button'><ScrollLink to='hero' offset={-100} smooth={true} duration={500}>Home</ScrollLink></li>
                    <li className='nav-button'><ScrollLink to='benefits' offset={-100} smooth={true} duration={1000}>Services</ScrollLink></li>
                    <li className='nav-button'><ScrollLink to='form' offset={-100} smooth={true} duration={1500}>Contact</ScrollLink></li>
                </ul>
                
                <ScrollLink to="form" smooth={true} duration={1550}>
                    <CustomButton
                        title='Request My Free Consultation'
                        btnType='button'
                        containerStyles='rounded-[8px] bg-main-gold min-w-[130px] px-4 py-3 text-bold hover:bg-transparent border-4 hover:border-main-gold ease-in duration-200 border-transparent mr-10'
                    />
                </ScrollLink>
            </nav>
        </header>
    );
}
 
export default Navbar;