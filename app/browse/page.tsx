import FetchMovies from "@/api/fetchMovies"
import CommonLayout from "@/components/common-layout/page"
import { useEffect } from "react"
import data from "@/movie_data/movies.json"

export default function Browse() {

    const mediaData = [
        {
            'title': 'Trending TV Shows',
            'medias': ['1', '2', '3', '4'] //JSON.stringify(data)
        },
        {
            'title': 'Popular TV Shows',
            'medias': ['1', '2', '3', '4']
        },
        {
            'title': 'Top Rated TV Shows',
            'medias': ['1', '2', '3', '4']
        },
        {
            'title': 'Trending Movies',
            'medias': ['1', '2', '3', '4']
        },
        {
            'title': 'Popular Moives Shows',
            'medias': ['1', '2', '3', '4']
        },
        {
            'title': 'Top Rated Movies',
            'medias': ['1', '2', '3', '4']
        },
    ]

    mediaData.forEach(media=>FetchMovies().then(data=>
        media['medias'] = data
    ))

    // console.log(mediaData)

    return (
        <main className="flex min-h-screen flex-col">
            <CommonLayout mediaData={mediaData} />
        </main>
    )
}