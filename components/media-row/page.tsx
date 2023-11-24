import MediaItem from "../media-item/page";

export default function MediaRow({ title, medias }:any) {
    return (
        <div className="h-40 space-y-0.5 md:space-y-2 px-4">
            <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
                {title}
            </h2>
            <div className="group relative md:-m2-2">
                <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
                    {
                        medias && medias.length ?
                            medias.map((item:any) => <MediaItem key={title} title={title} media={item} />) : null
                    }
                </div>
            </div>
        </div>
    )
}