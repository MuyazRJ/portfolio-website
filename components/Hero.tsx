"use client"

import CustomButton from "./CustomButton";
import { Link } from "react-scroll/modules";
import Lottie from "lottie-react";
import animationData from './dEYJ1bBxVU.json'

const Hero = () => {
    return (
        <div className="relative w-[100vw] h-[100vh] items-center justify-center flex">
            <Lottie animationData={animationData} className="absolute h-full w-[full] inset-0 -z-10" style={{width:'100vw'}}/>
            <div className="flex max-w-[1440px] flex-row relative gap-5 mx-auto">
                <div className="flex flex-col h-full min-w-[750px] mr-[400px]">
                    <h1 className="text-8xl text-white">Get More <br/><span className="font-bold">Leads</span> and <span className="font-bold">Sales</span></h1>

                    <p className="text-lg mt-10 text-white">Request a free consultation, and we'll help you reach your<br/>dream revenue figures. With Apollo, you will be rest assured <br/>that your business will skyrocket.</p>

                    <Link to="form" smooth={true} duration={1550}>
                        <CustomButton
                            title='Request My Free Consultation'
                            btnType='button'
                            containerStyles='rounded-[8px] bg-main-gold min-w-[130px] max-w-[279px] px-4 py-3 text-bold hover:bg-transparent border-4 hover:border-main-gold ease-in duration-200 border-transparent mt-10'
                        />
                    </Link>
                </div>
            </div>
        </div>
      );
}
 
export default Hero;