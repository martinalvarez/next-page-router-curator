import { getAllVideos } from "@/models/videos";
import VideoThumbnail from "@/components/VideoThumbnail";
import Link from "next/link";

function VideosCSR({ videos }) {
    return(
        <>
            <h1>Videos</h1>

            {videos.map(({ videoId }) => {
                return (
                    <Link key={videoId} href={`/video-csr/${videoId}`}>
                        <VideoThumbnail videoId={videoId} />
                    </Link>
                );
            })}
        </>
    );
}

export function getStaticProps() {
    const videos = getAllVideos();

    return {
        props: {
            videos,
        }
    }
}

export default VideosCSR;