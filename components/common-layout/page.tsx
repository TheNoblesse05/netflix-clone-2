import Banner from "../banner/page"
import MediaRow from "../media-row/page"
import NavBar from "../navbar/page"

export default function CommonLayout({ mediaData }:any) {
    return (
        <>
            <NavBar />
            <Banner />
            <div className="relative pl-4 pb-24 lg:space-y-24">
                <section className="md:space-y-16">
                    {
                        mediaData && mediaData.length ?
                            mediaData.map((item:any) => <MediaRow key={item.title} title={item.title} medias={item.medias} />)
                            : null
                    }
                </section>
            </div>
        </>
    )
}