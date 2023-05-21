import { getAllVideos, asyncGetAllVideos } from "@/models/videos";
import Error from "@/components/Error";
import Head from "next/head";
import Link from "next/link";
import Loading from "@/components/Loading";
import VideoThumbnail from "@/components/VideoThumbnail";
import { useState, useEffect } from "react";

function Videos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        async function getData() {
            try {
                const data = await asyncGetAllVideos();
                setVideos(data);
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                setError(true);
                console.log(error);
            }
        }
        getData();
    }, []);

    return(
        <>
            <Head>
                <title>Soda Stereo&apos;s videos</title>
            </Head>

            <h1>Videos</h1>

            {loading ? 
                <Loading /> : 
                    error ? <Error /> :
                        videos.map(({ videoId }) => {
                            return (
                            <Link key={videoId} href={`/video/${videoId}`}>
                                <VideoThumbnail videoId={videoId} />
                            </Link>
                        );
                })
            }
        </>
    );
}

export default Videos;