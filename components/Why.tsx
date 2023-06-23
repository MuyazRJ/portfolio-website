import TextReveal from "@/motion/TextReveal";
import SpaceParticles from "./SpaceParticles";

const Why = () => {
    return (  
        <div className="w-full bg-[#171717] mt-20 flex flex-col items-center relative z-10 justify-center md:p-[4.5rem] p-10 [text-shadow:_0_0_10px_rgb(255_255_255_/_35%)]">
            <SpaceParticles id="why"/>

            <h2 className="font-bold xl:max-w-[70%]  md:text-6xl text-center sm:text-5xl text-4xl text-[#B2D7E9] [text-shadow:_0_0_10px_rgb(255_255_255_/_55%)]"><TextReveal>Does my business need this?</TextReveal></h2>

            <TextReveal styles="flex items-center justify-center"><p className="text-white 2xl:max-w-[50%] xl:max-w-[70%] text-center md:mt-10 mt-6 sm:max-w-[90%] md:text-base text-sm font-bold">Most of your competitors don't know how effective a website can be. They use an average website to talk about what they sell, but never turn their website into a salesman that never sleeps.<br/><br/>When a website is easy to use and is structured to sell, people buy from <span className="font-bold text-[#B2D7E9]">you</span><br/><br/>Arctech does this to <span className="font-bold text-[#B2D7E9]">perfection</span></p></TextReveal>
        </div>
    );
}
 
export default Why;