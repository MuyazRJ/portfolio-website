import CustomButton from "./CustomButton";


const Hero = () => {
    return (
        <div className="flex max-w-[1440px] flex-row relative gap-5 mx-auto">
            <div className="flex flex-col pt-[6rem] px-10 h-full min-w-[750px]">
                <h1 className="text-[5rem] leading-[5rem]">Get More <br/><span className="font-bold">Leads</span> and <span className="font-bold text-main-gold">Sales</span></h1>

                <p className="text-nav-grey text-sm mt-10">Request a free consultation, and we'll help you reach your<br/>dream revenue figures. With Apollo, you will be rest assured <br/>that your business will skyrocket.</p>

                <CustomButton
                    title='Request My Free Consultation'
                    btnType='button'
                    containerStyles='rounded-[8px] bg-main-gold min-w-[130px] max-w-[279px] px-4 py-3 text-bold hover:bg-transparent border-4 hover:border-main-gold ease-in duration-200 border-transparent mt-10'
                />
            </div>

            <div className="flex-1">
                <video autoPlay muted loop className="w-[85%] min-w-[85%] pt-[6rem] items-end">
                <source src="./rocket_1.mp4" type="video/mp4"/>
            </video>
            </div>
            
        </div>
      );
}
 
export default Hero;