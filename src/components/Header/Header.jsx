import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <header className="mx-0 md:mx-16 lg:mx-32 mt-3 md:mt-12">
            <div className="max-w-[1600px] font-lexend justify-between items-center navbar bg-base-100 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Recipe</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-4xl font-bold">Recipe Corner</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-start text-[#150B2BB3]">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipe</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="hidden md:flex flex-row items-center rounded-[50px] relative bg-[#150B2B0D]">
                        <button className="absolute rounded-[50px] pl-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <input type="text" placeholder="Search" className="w-auto h-12 focus:outline-none py-4 bg-[#150B2B0D] pl-12 rounded-[50px]" />
                    </div>
                    <div className="text-2xl bg-[#0BE58A] w-10 md:w-12 h-10 md:h-12 rounded-full flex justify-center items-center ">
                        <a href="#"><CgProfile></CgProfile></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;