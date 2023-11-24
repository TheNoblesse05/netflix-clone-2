import { AiOutlineSearch } from "react-icons/ai"

export default function SearchBar({pathName, router, searchQuery, setSearchQuery, setShowSearchBar}:any) {
    return <div className="md:flex justify-center items-center text-center">
        <div className="bg-[rgba(0,0,0,0.75)] border border-[hsla(0,0%,100%,0.85)] px-4 items-center text-center flex">
            <div className="order-2">
                <input 
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value)}}
                placeholder="Search Movies, TV and Dramas"
                className="bg-transparent text-[14px] font-medium h-34px px-4 py-2 placeholder:text-[14px] font-md text-white outline-none width-[210px]"
                />
            </div>
            <button className="px-2.5">
                <AiOutlineSearch 
                    onClick={()=>{setShowSearchBar(false)}}
                    className = "sm:inline sm:w-6 sh:h-6 cursor-pointer"
                />
            </button>
        </div>
    </div>
}