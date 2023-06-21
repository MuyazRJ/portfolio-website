"use client"

import CustomButton from "./CustomButton";
import { Link } from "react-scroll/modules";
import Lottie from "lottie-react";
import animationData from '../animations/landing.json'
import { useEffect, useRef } from "react";

const Hero = () => {

    return (
        <div className="relative w-[100vw] h-[100vh] items-center xl:justify-center flex">
            <Lottie autoPlay={true} loop={true} animationData={animationData} className="absolute h-full w-[full] inset-0 -z-10" rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}}/>
            <div className="flex max-w-[90vw] flex-row relative gap-5">
                <div className="flex flex-col h-full min-w-[750px] xl:mr-[30vw] mt-[10vh] pl-10">
                    <h1 className="text-9xl text-white">Get More <br/><span className="font-bold">Leads</span> and <span className="font-bold">Sales</span></h1>

                    <p className="text-xl mt-10 text-white">Request a free consultation, and we'll help you reach your<br/>dream revenue figures. With Apollo, you will be rest assured <br/>that your business will skyrocket.</p>
                    
                    <div className="flex gap-6">
                        
                        <Link to="form" smooth={true} duration={1550}>
                            <CustomButton
                                title='Request My Free Consultation'
                                btnType='button'
                                containerStyles='rounded-[12px] bg-white min-w-[130px] px-10 py-6 font-bold hover:bg-main-gold border-4 ease-in duration-200 border-transparent mt-14 text-xl'
                            />
                        </Link>
                        <Link to="info" smooth={true} duration={1000}>
                            <CustomButton
                                title='Learn More'
                                btnType='button'
                                containerStyles='rounded-[8px] bg-main-black min-w-[130px] px-10 py-6 text-bold hover:bg-main-gold border-4 ease-in duration-200 border-transparent mt-14'
                                textStyles="text-white text-xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Hero;