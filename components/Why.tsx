"use client"

import SpaceParticles from "./SpaceParticles";

const Why = () => {
    return (  
        <div className="w-full bg-[#171717] mt-20 flex flex-col items-center relative z-10 justify-center p-16">
            <SpaceParticles/>
            <h2 className="font-bold max-w-[70%] text-white text-6xl text-center">Does my business need this?</h2>

            <p className="text-white max-w-[50%] text-center mt-10">Most of your competitors don't know how effective a website can be. They use an average website to talk about what they sell, but never turn their website into a salesman that never sleeps.<br/><br/>When a website is easy to use and is structured to sell, people sell from <span className="font-bold text-[#FFD700]">you</span><br/><br/>Apollo does this to<span className="font-bold"> perfection</span></p>
        </div>
    );
}
 
export default Why;