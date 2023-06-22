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
            <div className="flex lg:h-[600px] lg:w-[1175px] md:w-[700px] sm:h-[650px] lg:mt-24 sm:mt-12 relative items-center gap-4 lg:flex-row flex-col sm:w-[650px] w-[350px] h-[450px]">
                <div><CustomButton title='' containerStyles="w-24 h-24 border-2 border-[#4d4d4d] rounded-full relative items-center justify-center select-none hover:bg-[#2b2b2b] duration-300 lg:flex hidden" btnType="button" handleClick={buttonClick} rightIcon="/arrow-symbol.png" isDisabled={buttonDisable}/></div>
                <div className="flex w-full h-full relative bg-cover bg-center duration-500 border-2 rounded-[2rem] shadow-lg" style={{ backgroundImage: `url(${currentImage})` }}></div>
                <div><CustomButton title='' containerStyles="w-24 h-24 border-2 border-[#4d4d4d] rounded-full justify-self-end relative lg:flex hidden items-center justify-center rotate-180 select-none hover:bg-[#2b2b2b] duration-300" btnType="button" handleClick={buttonClick} rightIcon="/arrow-symbol.png" isDisabled={buttonDisable}/></div>

                <div className="lg:hidden flex gap-10">
                    <div><CustomButton title='' containerStyles="w-24 h-24 border-2 border-[#4d4d4d] rounded-full relative flex items-center justify-center select-none hover:bg-[#2b2b2b] duration-300" btnType="button" handleClick={buttonClick} rightIcon="/arrow-symbol.png" isDisabled={buttonDisable}/></div>
                    <div><CustomButton title='' containerStyles="w-24 h-24 border-2 border-[#4d4d4d] rounded-full justify-self-end relative flex items-center justify-center rotate-180 select-none hover:bg-[#2b2b2b] duration-300" btnType="button" handleClick={buttonClick} rightIcon="/arrow-symbol.png" isDisabled={buttonDisable}/></div>
                </div>
            </div>
        </div>
     );
}
 
export default Carousel;