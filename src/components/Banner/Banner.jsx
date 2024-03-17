import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="font-lexend mx-6 lg:mx-32 lg:mt-12 mt-6">
            <div className="max-w-[1600px] w-full h-auto mx-auto">
                <div className="w-full h-auto flex flex-col justify-center items-center gap-4 md:gap-8 bg-cover bg-center bg-no-repeat rounded-3xl text-center px-6 py-6 md:px-20 xl:px-48 md:py-16 xl:py-32" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="w-full">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-normal lg:leading-normal">Discover an exceptional cooking class tailored for you!</h2>
                    </div>
                    <div className="text-base md:text-lg text-white">
                        <p className="">We cook the best dishes in the continent. You are welcome here to enjoy our delicious dishes! Our dishes are so delicious that you will never forget the taste!</p>
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