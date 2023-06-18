

const Info = () => {
    return (  
        <div className="max-w-[1440px] flex flex-col mx-auto relative">
            <h1 className="font-bold text-7xl self-center mb-[7rem] mt-[14rem] text-[#1c1c1c]">Grow your business professionally</h1>

            <div className="flex w-full justify-between p-4">
                <div className="flex flex-col gap-10 max-w-[50%] mr-[1%] justify-center">
                    <h2 className="font-bold text-3xl">Increase revenue and improve competitiveness</h2>
                    <p className="text-[#787878]">Businesses can generate more revenue and sales through improving one thing - their website. By using a website as a competitive advantage, you can increase your competitiveness and increase your margins.<br/><br/>A professional business optimises all key areas of their system, from websites to product.</p>
                </div>

                <div className="w-80 h-80 bg-gray-500 rounded-full"></div>
            </div>
            
            <div className="flex w-full justify-between p-4 mt-20">
                <div className="w-80 h-80 bg-gray-500 rounded-full ml-[1%]"></div>

                <div className="flex flex-col gap-10 max-w-[50%] justify-center">
                    <h2 className="font-bold text-3xl">Grow Professionally</h2>
                    <p className="text-[#787878]">Your current website is either outdated, takes too long to load or is not mobile device optmised.<br/><br/>We're here to get you and your business to the next step, without the hassle.</p>
                </div>
            </div>

            <div className="flex w-full justify-between p-4">
                <div className="flex flex-col gap-10 max-w-[50%] mr-[1%] justify-center">
                    <h2 className="font-bold text-3xl">Our Process</h2>
                    <p className="text-[#787878]">All our clients go through the conversion rate optimisation process. This means that every process will be tailored to your business with regular updates. We go through research, wire framing, prototypes, split testing and more.</p>
                </div>

                <div className="w-80 h-80 bg-gray-500 rounded-full"></div>
            </div>
        </div>
    );
}
 
export default Info;