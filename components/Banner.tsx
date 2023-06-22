"use client"

import CustomButton from "./CustomButton";
import SpaceParticles from "./SpaceParticles";
import { Link as ScrollLink } from "react-scroll/modules";

const Banner = () => {
    return ( 
        <div className="md:h-[400px] w-full bg-[#171717] lg:mt-8 flex flex-col items-center justify-center relative z-10 h-[300px]">
            <SpaceParticles id="banner"/>
            <p className="text-white max-w-[70%] flex-1 items-end flex text-center [text-shadow:_0_0_10px_rgb(255_255_255_/_54%)]">Your current website is either outdated, takes too long to load or is not mobile device optmised.</p>
            
            <div className="flex-1 flex items-end">

            <ScrollLink to="form" smooth={true} duration={1200}>
                <CustomButton
                    title='Request My Free Consultation'
                    btnType='button'
                    containerStyles='rounded-[8px] bg-main-gold min-w-[130px] max-w-[279px] max-h-[60px] sm:px-5 sm:py-4 px-3 py-4 text-bold hover:bg-white ease-in duration-200 border-transparent mb-10'
                />
            </ScrollLink>
            </div>
           
        </div>
     );
}
 
export default Banner;