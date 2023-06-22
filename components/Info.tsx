"use client"

import Lottie, { LottieRefCurrentProps } from "lottie-react";

import processData from '../animations/process.json'
import revenueData from '../animations/revenue.json'
import growData from '../animations/grow.json'

const Info = () => {
    return (  
        <div className="max-w-[1440px] flex flex-col mx-auto relative">
            <h1 className="font-bold lg:text-7xl self-center md:mb-[7rem] mb-[3rem] mt-[4rem] text-[#1c1c1c] text-5xl text-center">Grow your business professionally</h1>

            <div className="flex w-full justify-between p-4 lg:flex-row flex-col-reverse lg:gap-0 gap-2">
                <div className="flex items-center justify-center">
                    <Lottie autoPlay={true} loop={true} animationData={revenueData} className='w-[500px]' rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}}/>
                </div>

              <div className="flex flex-col gap-10 lg:max-w-[50%] mr-[1%] justify-center">
                    <h2 className="font-bold lg:text-3xl lg:text-start text-center text-3xl">Increase revenue and improve competitiveness</h2>
                    <p className="text-[#787878]">Businesses can generate more revenue and sales through improving one thing - their website. By using a website as a competitive advantage, you can increase your competitiveness and increase your margins.<br/><br/>A professional business optimises all key areas of their system, from websites to product.</p>
                </div>
            </div>
            
            <div className="flex w-full p-4 lg:gap-40 lg:flex-row flex-col gap-2">
                <div className="flex flex-col gap-10 lg:max-w-[50%] justify-center">
                    <h2 className="font-bold lg:text-3xl lg:text-start text-center text-3xl">Grow Professionally</h2>
                    <p className="text-[#787878]">Your current website is either outdated, takes too long to load or is not mobile device optmised.<br/><br/>We're here to get you and your business to the next step, without the hassle.</p>
                </div>

                <div className="flex items-center justify-center"><Lottie autoPlay={true} loop={true} animationData={growData} className="lg:w-[480px] w-[410px]" rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}}/></div>
                
            </div>

            <div className="flex w-full justify-between lg:gap-20 lg:flex-row flex-col-reverse p-4 lg:mt-0 mt-6">
                <div className="flex items-center justify-center">
                    <Lottie autoPlay={true} loop={true} animationData={processData} className="lg:w-[510px] w-[470px]" rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}}/>
                </div>

                <div className="flex flex-col gap-10 lg:max-w-[50%] justify-center">
                    <h2 className="font-bold lg:text-3xl lg:text-start text-center text-3xl">Our Process</h2>
                    <p className="text-[#787878]">All our clients go through the conversion rate optimisation process. This means that every process will be tailored to your business with regular updates. We go through research, wire framing, prototypes, split testing and more.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Info;