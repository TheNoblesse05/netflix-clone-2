import FetchMovies from "@/api/fetchMovies"
import CommonLayout from "@/components/common-layout/page"
import { useEffect } from "react"
import data from "@/movie_data/card_movies.json"

export default function Browse() {

    const mediaData = [
        {
            'title': 'Trending TV Shows',
            'medias': data
        },
        {
            'title': 'Popular TV Shows',
            'medias': data
        },
        {
            'title': 'Top Rated TV Shows',
            'medias': data
        },
        {
            'title': 'Trending Movies',
            'medias': data
        },
        {
            'title': 'Popular Moives Shows',
            'medias': data
        },
        {
            'title': 'Top Rated Movies',
            'medias': data
        },
    ]

    // mediaData.forEach(media=>FetchMovies().then(data=>
    //     media['medias'] = data
    // ))

    return (
        <main className="flex min-h-screen flex-col">
            <CommonLayout mediaData={mediaData} />
        </main>
    )
}