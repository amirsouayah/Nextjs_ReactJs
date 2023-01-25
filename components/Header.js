import Image from "next/legacy/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        })
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }


    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white 
        shadow-md p-5 md:px-10 ">
            {/* left */}
            <div className="">
                <div onClick={() => router.push('/')} className="flex shrink-0 space-x-3 rounded-full p-2 
                 md:mx-2">
                    <Image
                        className="rounded-full mr-3 cursor-pointer"
                        src='https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/305627010_484120090388458_7367717883715553588_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ypYbRPVjKjkAX84CH_r&tn=M8l7FD4dhX9owSMa&_nc_ht=scontent-cdt1-1.xx&oh=00_AfClRahHUO_HdlbbhycjxVnFy7VtcxoKK13h9CPqIWuh9A&oe=63D55887'
                        // layout="fill"
                        width={45}
                        height={45}
                        alt="logo"
                        position='static'
                    />
                    <div className="text-center space-y-2 cursor-pointer ">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold mt-2">
                                Sevens
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle */}
            <div className="flex items-center 
            border-2 rounded-full py-2 
            shadow-sm">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-5 
                    bg-transparent outline-none overflow-hidden text-sm
                    text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder={placeholder || "Search"}
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
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-10">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={noOfGuests}
                            onChange={e => setNoOfGuests(e.target.value)}
                            min={1}
                            type="number"
                            className="w-12 pl-2 text-lg 
                            outline-none text-red-400"/>
                    </div>
                    <div className="flex ">
                        <button
                            onClick={resetInput}
                            className="flex-grow text-gray-500">
                            Cancel
                        </button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;