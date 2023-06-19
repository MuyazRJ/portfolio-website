import CustomButton from "./CustomButton";
import SpaceParticles from "./SpaceParticles";

const Banner = () => {
    return ( 
        <div className="h-[400px] w-full bg-[#171717] mt-20 flex flex-col items-center justify-center relative z-10">
            <SpaceParticles id="banner"/>
            <p className="text-white max-w-[70%] flex-1 items-end flex text-center [text-shadow:_0_0_10px_rgb(255_255_255_/_54%)]">Your current website is either outdated, takes too long to load or is not mobile device optmised.</p>
            
            <div className="flex-1 flex items-end">
                <CustomButton
                    title='Request My Free Consultation'
                    btnType='button'
                    containerStyles='rounded-[8px] bg-main-gold min-w-[130px] max-w-[279px] max-h-[60px] px-4 py-3 text-bold hover:bg-transparent border-4 hover:border-main-gold ease-in duration-200 border-transparent mb-10'
                />
            </div>
           
        </div>
     );
}
 
export default Banner;