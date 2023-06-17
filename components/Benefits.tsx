import Image from "next/image";

const Benefits = () => {
    return (  
        <div className="flex flex-col w-full mt-16 relative justify-center items-center">
            <h2 className="font-bold text-7xl text-[#1c1c1c]">Why should I care?</h2>

            <p className="mt-10 text-[#787878] xl:max-w-[40%] max-w-[700px]">While our websites may look astonishingly beautiful, they are not designed to just look nice. Our team takes a very precise approach, to ensure visitors on your website buy from you.<br/><br/>When you sign on with us, you will receive all the benefits and help you need to skyrocket.</p>
            
            <div className="flex justify-between w-[1440px] h-[250px] mt-20 gap-60">
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/consult.png' alt='consult' fill className="object-contain flex-1"/>
                    </div>
                    <p className="self-center font-bold mt-4">Consultations and Feedback</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/competitive.png' alt='competitive' fill className="object-contain flex-1"/>
                    </div>
                    <p className="self-center font-bold mt-4">Competitive Advantages</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/research.png' alt='research' fill className="object-contain flex-1"/>
                    </div>
                    <p className="self-center font-bold mt-4">Research Based Systems</p>
                </div>
            </div>
            

            <div className="img-wrapper">
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/seo.png' alt='SEO' fill className="object-contain"/>
                    </div>
                    <p className="self-center font-bold mt-4">Google SEO Optimised</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/CRO.png' alt='CR0' fill className="object-contain"/>
                    </div>
                    <p className="self-center font-bold mt-4">CRO Sales Optimised</p>
                </div>
                <div className="img-container">
                    <div className="relative w-full h-full">
                        <Image src='/SUPPORT.png' alt='support' fill className="object-contain"/>
                    </div>
                    <p className="self-center font-bold mt-4">Support</p>
                </div>
            </div>
        </div>
    );
}
 
export default Benefits;