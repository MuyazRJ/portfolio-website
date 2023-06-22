"use client"

import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

import { Link as ScrollLink } from "react-scroll/modules";
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [menuIsOpen, setMenu] = useState(false)
    const [closeAnimation, setCloseAnimation] = useState(false)

    const handleClick = () => {
        if (menuIsOpen) {
            setCloseAnimation(true)
            setTimeout(() => {
                setMenu(false)
                setCloseAnimation(false)
            }, 380)
        }
        else {
            setMenu(true)
        }
    }

    return (  
        <header className='w-[full] h-[80px] mx-auto inset-0 bg-main-black flex justify-center z-20 fixed'>
            <nav className="w-full h-full flex justify-between items-center py-4">
                <Link href='/' className='flex justify-start items-start ml-10 min-w-[150px]'>
                    <Image
                        src="/logo.png"
                        alt='apollo logo'
                        className='object-contain'
                        width={68}
                        height={16}
                    />
                </Link>
             
                <ul className='gap-16 flex-1 justify-center hidden lg:flex'>
                    <li className='nav-button'><ScrollLink to='hero' offset={-100} smooth={true} duration={500}>Home</ScrollLink></li>
                    <li className='nav-button'><ScrollLink to='benefits' offset={-100} smooth={true} duration={1000}>Services</ScrollLink></li>
                    <li className='nav-button'><ScrollLink to='form' offset={-100} smooth={true} duration={1500}>Contact</ScrollLink></li>
                </ul>
                
                <div className='hidden lg:block'>
                    <ScrollLink to="form" smooth={true} duration={1550}>
                    <CustomButton
                        title='Request My Free Consultation'
                        btnType='button'
                        containerStyles='rounded-[8px] bg-[#B2D7E9] min-w-[130px] px-4 py-4 text-bold hover:bg-white ease-in duration-200 border-transparent mr-10 font-bold'
                    />
                    </ScrollLink>
                </div>

                <div className='lg:hidden flex h-[70%] w-[4em] flex-col items-center justify-between cursor-pointer mr-10' onClick={handleClick}>
                    <div className={` bg-main-gold rounded-[0.1em] duration-300 ${menuIsOpen ? 'rotate-45 h-[.4em] w-[2.7em] translate-y-[0.72rem] z-20' : 'h-[.4em] w-[2.7em]'}`}/>
                    <div className={`bg-main-gold rounded-[0.1em] duration-300 ${menuIsOpen ? '' : 'h-[.4em] w-[1.7em]'}`}/>
                    <div className={` bg-main-gold rounded-[0.1em] duration-300 ${menuIsOpen ? 'rotate-[-45deg] h-[.4em] w-[2.7em] translate-y-[-1rem] z-20' : 'h-[.4em] w-[1em]'}`}/>
                </div>

                <div className={`lg:hidden ${menuIsOpen ? 'absolute h-[100vh] w-[100vw] inset-0' : 'hidden' }`}>
                    <div className={`h-full w-full bg-main-black animate-entry flex justify-center items-center ${closeAnimation ? 'animate-leave': ""}`}>
                        <ul className='gap-16 flex-col flex justify-center w-full h-full items-center'>
                            <li className='nav-button-menu'><ScrollLink to='hero' offset={-100} smooth={true} duration={500} onClick={handleClick}>Home</ScrollLink></li>
                            <li className='nav-button-menu'><ScrollLink to='benefits' offset={-100} smooth={true} duration={1000} onClick={handleClick}>Services</ScrollLink></li>
                            <li className='nav-button-menu'><ScrollLink to='form' offset={-100} smooth={true} duration={1500} onClick={handleClick}>Contact</ScrollLink></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
}
 
export default Navbar;