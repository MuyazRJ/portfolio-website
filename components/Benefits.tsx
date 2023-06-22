import Image from "next/image";

const Benefits = () => {
    return (  
        <div className="flex flex-col w-full mt-16 relative justify-center items-center">
            <h2 className="font-bold text-[#1c1c1c] text-center md:text-7xl text-6xl p-4">Why should I care?</h2>

            <p className="sm:mt-10 text-[#787878] [2xl]:max-w-[40%] md:max-w-[800px] p-4 mt-4">While our websites may look astonishingly beautiful, they are not designed to just look nice. Our team takes a very precise approach, to ensure visitors on your website buy from you.<br/><br/>When you sign on with us, you will receive all the benefits and help you need to skyrocket.</p>
            
            <div className="img-wrapper">
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/consult.png' alt='consult' fill className="object-contain flex-1"/>
                    </div>
                    <p className="self-center font-bold mt-4 text-center">Consultations and Feedback</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/competitive.png' alt='competitive' fill className="object-contain flex-1"/>
                    </div>
                    <p className="self-center font-bold mt-4 text-center">Competitive Advantages</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/research.png' alt='research' fill className="object-contain flex-1"/>
                    </div>
                    <p className="self-center font-bold mt-4 text-center">Research Based Systems</p>
                </div>
            </div>
            

            <div className="img-wrapper">
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/seo.png' alt='SEO' fill className="object-contain"/>
                    </div>
                    <p className="self-center font-bold mt-4 text-center">Google SEO Optimised</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/CRO.png' alt='CR0' fill className="object-contain"/>
                    </div>
                    <p className="self-center font-bold mt-4 text-center">CRO Sales Optimised</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/SUPPORT.png' alt='support' fill className="object-contain"/>
                    </div>
                    <p className="self-center font-bold mt-4 text-center">Support</p>
                </div>
            </div>
        </div>
    );
}
 
export default Benefits;