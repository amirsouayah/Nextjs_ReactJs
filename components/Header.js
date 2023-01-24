import Image from "next/legacy/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid 
        grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left */}
            <div className="realtive flex items-center h-10 cursor-auto my-auto w-1/4">
                {/* <Image
                    className="w-1/5"
                    src='https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/305627010_484120090388458_7367717883715553588_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ypYbRPVjKjkAX84CH_r&tn=M8l7FD4dhX9owSMa&_nc_ht=scontent-cdt1-1.xx&oh=00_AfClRahHUO_HdlbbhycjxVnFy7VtcxoKK13h9CPqIWuh9A&oe=63D55887'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt="logo"
                    position='static'
                /> */}
            </div>

            {/* Middle */}
            <div className="flex items-center 
            md:border-2 rounded-full py-2 
            md:shadow-sm">
                <input
                    className="flex-grow pl-5 
                    bg-transparent outline-none text-sm
                    text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Start your search"
                />
                <SearchIcon className="hidden md:inline-flex
                h-8 bg-black 
                text-white rounded-full p-2 
                cursor-pointer md:mx-2" />
            </div>

            {/* Right */}
            <div className="flex items-center 
            space-x-4 justify-end text-gray-500 ">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header;