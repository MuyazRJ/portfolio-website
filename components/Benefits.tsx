import ImageReveal from "@/motion/ImageReveal";
import TextReveal from "@/motion/TextReveal";
import Image from "next/image";

const Benefits = () => {
    return (  
        <div className="flex flex-col w-full mt-16 relative justify-center items-center">
            <TextReveal>
                <h2 className="font-bold text-[#1c1c1c] text-center md:text-7xl text-6xl p-4">Why should I care?</h2>
            </TextReveal>

            <TextReveal>
                <p className="sm:mt-10 text-[#787878] [2xl]:max-w-[40%] md:max-w-[800px] p-4 mt-4">While our websites may look astonishingly beautiful, they are not designed to just look nice. Our team takes a very precise approach, to ensure visitors on your website buy from you.<br/><br/>When you sign on with us, you will receive all the benefits and help you need to skyrocket.</p>
            </TextReveal>
            
            <div className="img-wrapper">
                <div className='img-container'>
                    <ImageReveal styles="relative w-full h-full">
                        <Image src='/consult.png' alt='consult' fill className="object-contain flex-1"/>
                    </ImageReveal>
                    
                    <ImageReveal>
                        <p className="self-center font-bold mt-4 text-center">Consultations and Feedback</p>
                     </ImageReveal>
                </div>
                <div className="img-container">
                    <ImageReveal styles="relative w-full h-full" delay={0.2}>
                        <Image src='/competitive.png' alt='competitive' fill className="object-contain flex-1"/>
                    </ImageReveal>

                    <ImageReveal delay={0.1}>
                        <p className="self-center font-bold mt-4 text-center">Competitive Advantages</p>
                    </ImageReveal>
                </div>
                <div className="img-container">
                    <ImageReveal styles="relative w-full h-full" delay={0.4}>
                        <Image src='/research.png' alt='research' fill className="object-contain flex-1"/>
                    </ImageReveal>
                    
                    <ImageReveal delay={0.3}>
                        <p className="self-center font-bold mt-4 text-center">Research Based Systems</p>
                    </ImageReveal>
                </div>
            </div>
            

            <div className="img-wrapper">
                <div className="img-container">
                    <ImageReveal styles="relative w-full h-full">
                        <Image src='/seo.png' alt='SEO' fill className="object-contain"/>
                    </ImageReveal>
                    
                    <ImageReveal>
                        <p className="self-center font-bold mt-4 text-center">Google SEO Optimised</p>
                    </ImageReveal>
                </div>
                <div className="img-container" >
                    <ImageReveal styles="relative w-full h-full" delay={0.2}>
                        <Image src='/CRO.png' alt='CR0' fill className="object-contain"/>
                    </ImageReveal>
                    
                    <ImageReveal delay={0.1}>
                        <p className="self-center font-bold mt-4 text-center">CRO Sales Optimised</p>
                    </ImageReveal>
                </div>
                <div className="img-container">
                    <ImageReveal styles="relative w-full h-full" delay={0.4}>
                        <Image src='/SUPPORT.png' alt='support' fill className="object-contain"/>
                    </ImageReveal>
                    
                    <ImageReveal delay={0.3}>
                        <p className="self-center font-bold mt-4 text-center">Support</p>
                    </ImageReveal>
                </div>
            </div>
        </div>
    );
}
 
export default Benefits;