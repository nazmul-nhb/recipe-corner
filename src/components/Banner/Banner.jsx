import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="font-lexend mx-6 lg:mx-32 lg:mt-12 mt-8">
            <div className="max-w-[1600px] w-full h-auto mx-auto">
                <div className="w-full h-auto flex flex-col justify-center items-center gap-4 md:gap-8 bg-cover bg-center bg-no-repeat rounded-3xl text-center px-6 py-8 md:px-24 lg:px-48 md:p-16 lg:py-32" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="">
                        <h2 className="text-xl md:text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h2>
                    </div>
                    <div className="text-base md:text-lg text-white">
                        <p className="">We cook the best dishes in the continent. You are welcome here to enjoy our delicious dishes! Our dishes are so delicious that you will never forget the taste!</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                        <button className="w-48 h-16 text-[#150B2B] rounded-[50px] font-semibold text-xl bg-[#0BE58A] border border-[#0BE58A] hover:text-white hover:border-white hover:bg-transparent">Explore Now</button>
                        <button className="w-48 h-16 text-white rounded-[50px] font-semibold text-xl border border-white hover:border-[#0BE58A] hover:text-[#150B2B] hover:bg-[#0BE58A]">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;