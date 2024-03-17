import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="font-lexend mx-6 lg:mx-32 lg:mt-12 mt-6">
            <div className="max-w-[1600px] w-full h-auto mx-auto">
                <div className="w-full h-auto flex flex-col justify-center items-center gap-4 md:gap-8 bg-cover bg-center bg-no-repeat rounded-3xl text-center p-6 md:p-16 xl:p-32" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="w-full">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-normal lg:leading-normal">Discover an exceptional cooking class tailored for you!</h2>
                    </div>
                    <div className="text-base md:text-lg">
                        <p className="text-white">Embark on a culinary journey with our bespoke cooking classes, crafted just for you! Uncover the art of cooking with our personalized cooking classes designed to suit your tastes!</p>
                    </div>
                    <div className="flex flex-row gap-2 md:gap-8 items-center">
                        <button className="w-32 md:w-48 h-11 md:h-16 text-[#150B2B] rounded-[50px] font-semibold text-base md:text-xl bg-[#0BE58A] border border-[#0BE58A] hover:text-white hover:border-white hover:bg-transparent">Explore Now</button>
                        <button className="w-36 md:w-48 h-11 md:h-16 text-white rounded-[50px] font-semibold text-base md:text-xl border border-white hover:border-[#0BE58A] hover:text-[#150B2B] hover:bg-[#0BE58A]">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;