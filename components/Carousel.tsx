"use client"

import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";

const Carousel = () => {
    const images = ['MOCKUP_BARBURRITO.png', 'car_portfolio.png']
    const [currentImage, setCurrentImage] = useState(images[1]);
    const [buttonDisable, setButtonDisable] = useState(false)

    const buttonClick = () => {
        setButtonDisable(true)

        if (currentImage === images[0]) {
            setCurrentImage(images[1])
        } else {
            setCurrentImage(images[0])
        }

        setTimeout(() => {
            setButtonDisable(false)
        }, 500)
    }

    return ( 
        <div className="flex flex-col w-full mt-16 relative justify-center items-center">
            <h2 className="font-bold text-7xl text-[#1c1c1c]">Our Work</h2>
            <div className="flex h-[600px] w-[1175px] mt-24 relative items-center gap-10">
                <div><CustomButton title='' containerStyles="w-24 h-24 border-2 border-[#4d4d4d] rounded-full relative flex items-center justify-center select-none hover:bg-[#2b2b2b] duration-300" btnType="button" handleClick={buttonClick} rightIcon="/arrow-symbol.png" isDisabled={buttonDisable}/></div>
                <div className="flex w-full h-full relative bg-contain bg-center duration-500 border-2 rounded-[2rem] shadow-lg" style={{ backgroundImage: `url(${currentImage})` }}></div>
                <div><CustomButton title='' containerStyles="w-24 h-24 border-2 border-[#4d4d4d] rounded-full justify-self-end relative flex items-center justify-center rotate-180 select-none hover:bg-[#2b2b2b] duration-300" btnType="button" handleClick={buttonClick} rightIcon="/arrow-symbol.png" isDisabled={buttonDisable}/></div>
            </div>
        </div>
     );
}
 
export default Carousel;