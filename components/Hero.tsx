"use client"

import CustomButton from "./CustomButton";
import { Link } from "react-scroll/modules";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from '../animations/blue1.json'
import { useEffect, useRef } from "react";

const Hero = () => {
    const landingRef = useRef<LottieRefCurrentProps>(null)

    useEffect(() => {
        landingRef.current?.setSpeed(0.5)
    }, [])

    return (
        <div className="relative w-[100vw] min-h-[100vh] items-center xl:justify-center flex">
            <Lottie autoPlay={true} loop={true} animationData={animationData} className="absolute h-full w-[full] inset-0 -z-10" rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}} lottieRef={landingRef}/>
            <div className="flex max-w-[90vw] flex-row relative gap-5">
                <div className="flex flex-col h-full 2xl:mr-[400px] lg:pl-0 pl-10">
                    <h1 className="lg:text-9xl text-white sm:text-8xl text-6xl">Get More <br/><span className="font-bold">Leads</span> and <span className="font-bold">Sales</span></h1>

                    <p className="sm:text-xl sm:mt-10 mt-4 text-white">Request a free consultation, and we'll help you reach your<br/>dream revenue figures. With Apollo, you will be rest assured <br/>that your business will skyrocket.</p>
                    
                    <div className="flex gap-6 sm:flex-row flex-col">
                        
                        <Link to="form" smooth={true} duration={1550}>
                            <CustomButton
                                title='Request My Free Consultation'
                                btnType='button'
                                containerStyles='rounded-[12px] bg-white min-w-[130px] md:px-10 md:py-6 px-4 py-4 font-bold hover:bg-main-gold border-4 ease-in duration-200 border-transparent sm:mt-14 mt-8 sm:text-xl'
                            />
                        </Link>
                        <Link to="info" smooth={true} duration={1000}>
                            <CustomButton
                                title='Learn More'
                                btnType='button'
                                containerStyles='rounded-[8px] bg-main-black min-w-[130px] md:px-10 md:py-6 px-4 py-4 text-bold hover:bg-main-gold border-4 ease-in duration-200 border-transparent sm:mt-14'
                                textStyles="text-white sm:text-xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Hero;