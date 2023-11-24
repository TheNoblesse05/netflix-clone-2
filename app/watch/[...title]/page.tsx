'use client'

import { useEffect } from "react"
import data from "@/movie_data/card_movies.json"
import data1 from "@/movie_data/banner_movies.json"
import { useParams } from "next/navigation"
import ReactPlayer from "react-player"

export default function Watch() {

    const allData = [...data,...data1]

    const params = useParams()
    const paramsUrl = params.title[0].replace(/%20/g, " ")
    let videoUrl = ''

    // Ideally you'd want to pass the ID of the movie and search that ID in the DB to get the movie URL
    // useEffect(() => {
    //     async function getMovieURL(id)
    // }, [])

    allData.forEach(movie => {
        if (paramsUrl === movie.title)
            videoUrl = movie.videoUrl || ''
    })

    return (
        <div>
            <ReactPlayer
                url={videoUrl}
                width={'100%'}
                height={'100%'}
                style={{ position: 'absolute', top: '0', left: '0' }}
                playing
                controls
            />
        </div>
    )
}