'use client'

import Image from "next/image"
import {
    PlusIcon,
    ChevronDownIcon,
    CheckIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function MediaItem({ title, media }) {

    const router = useRouter()

    return (
        <>
            <div className="relative cardWrapper h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] transform transition duration-500 hover:scale-110 hover:z-[999]">
                <Image src={media.thumbnail}
                    alt="Media card"
                    fill
                    className="rounded sm object-cover md:rounded hover:md:rounded-sm"
                    onClick={()=>router.push(`/watch/${media.title}`)} />
                {/* {media['title']} */}
                <div className="space-x-3 hidden absolute p-2 bottom-0 buttonWrapper">
                    <button
                        className="cursor-pointer border flex p-2 items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90 border-white   bg-black opacity-75 text-black"
                    >
                        <PlusIcon color="#ffffff" className="h-7 w-7" />
                    </button>
                    <button
                        className="cursor-pointer p-2 border flex items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90  border-white  bg-black opacity-75"
                    >
                        <ChevronDownIcon color="#fffffff" className="h-7 w-7" />
                    </button>
                </div>
            </div>

        </>
    )
}