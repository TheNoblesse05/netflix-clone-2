"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBar from "./search";
import AccountPopup from "./account-popup";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathName = usePathname();
    // TODO: add account switching option
    const [showAccountPopup, setShowAccountPopup] = useState(false)

    const navItems = [
        { id: "home", title: "Home", path: "/browse" },
        { id: "tv", title: "TV", path: "/tv" },
        { id: "movies", title: "Movies", path: "/movies" },
        { id: "mylist", title: "My List", path: "/my-list" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        <nav>
            <header
                className={`header hover:bg-[#141414] ${isScrolled && "bg-[#141414]"}`}>
                {/* logo and routes */}
                <div className="flex items-center space-x-2 md:space-x-10">
                    <img src="https://rb.gy/ulxxee"
                    alt="Netflix Icon"
                    width={120}
                    height={120}
                    className="cursor-pointer object-contain"
                    onClick={() => { router.push('/browse') }}
                    />
                    <ul className="md:space-x-4 md:flex cursor-pointer">
                        {
                            navItems.map(item => <li
                                                    className="cursor-pointer text-[16px] font-light text-[#e5e5e5] transition duration-[.4s] mx-0.5 hover:text-[#b3b3b3]"
                                                    key={item.id}
                                                    onClick={()=>{router.push(item.path)}}>
                                                        {item.title}
                                                </li>)
                        }
                    </ul>
                </div>
                {/* search and user icon */}
                <div className="font-light flex items-center space-x-4 text-sm">
                    {
                        showSearchBar ? 
                            <SearchBar 
                                pathName = {pathName}
                                router = {router}
                                searchQuery = {searchQuery}
                                setSearchQuery = {setSearchQuery}
                                setShowSearchBar = {setShowSearchBar}
                            /> : 
                            <AiOutlineSearch 
                                onClick={()=>{setShowSearchBar(true)}}
                                className="sm:inline sm:w-6 sm:h-6 cursor-pointer" />
                    }
                    <div className="flex gap-2 items-center cursor-pointer">
                        <img 
                            src="https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                            alt="Current Profile"
                            className="rounded max-w-[30px] min-w-[20px] max-h-[30px] min-h-[20px]" />
                    </div>
                </div>
            </header>
        </nav>
    );
}
