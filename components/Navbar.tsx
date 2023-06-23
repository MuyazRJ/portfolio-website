"use client"

import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

import { Link as ScrollLink } from "react-scroll/modules";
import { useState } from 'react';


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
            <nav className="w-full h-full flex justify-between items-center">
                <div className='relative lg:w-[60px] flex justify-start w-[49px] ml-4 lg:ml-8 xl:flex-1'><Link href='/' className=''>
                    <Image
                        src="/nav_logo.png"
                        alt='arctech logo'
                        className='object-contain'
                        width={65}
                        height={16}
                    />
                </Link></div>
                
             
                <ul className='gap-16 hidden lg:flex xl:flex-2 justify-center'>
                    <li className='nav-button'><ScrollLink to='hero' offset={-100} smooth={true} duration={500}>Home</ScrollLink></li>
                    <li className='nav-button'><ScrollLink to='benefits' offset={-100} smooth={true} duration={1000}>Services</ScrollLink></li>
                    <li className='nav-button'><ScrollLink to='form' offset={-100} smooth={true} duration={1500}>Contact</ScrollLink></li>
                </ul>
                
                <div className='hidden lg:flex xl:flex-1 items-end justify-end lg:mr-2'>
                    <ScrollLink to="form" smooth={true} duration={1550}>
                    <CustomButton
                        title='Request My Free Consultation'
                        btnType='button'
                        containerStyles='rounded-[8px] bg-[#B2D7E9] min-w-[130px] px-4 py-4 text-bold hover:bg-main-gold ease-in duration-200 border-transparent mr-4 font-bold'
                    />
                    </ScrollLink>
                </div>

                <div className='lg:hidden flex h-[30%] flex-col items-center justify-between cursor-pointer mr-5' onClick={handleClick}>
                    <div className={` bg-main-gold rounded-[0.1em] duration-300 ${menuIsOpen ? 'rotate-45 h-[.3em] w-[1.9em] translate-y-[0.24rem] z-20' : 'h-[.4em] w-[1.9em]'}`}/>
                    <div className={`bg-main-gold rounded-[0.1em] duration-300 ${menuIsOpen ? '' : 'h-[.4em] w-[1.2em]'}`}/>
                    <div className={` bg-main-gold rounded-[0.1em] duration-300 ${menuIsOpen ? 'rotate-[-45deg] h-[.3em] w-[1.9em] translate-y-[-1rem] z-20' : 'h-[.4em] w-[0.7em]'}`}/>
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