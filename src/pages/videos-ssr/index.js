import { getAllVideos } from "@/models/videos";
import VideoThumbnail from "@/components/VideoThumbnail";
import Link from "next/link";

function VideosSSR({ videos }) {
    return(
        <>
            <h1>Videos</h1>

            {videos.map(({ videoId }) => {
                return (
                    <Link key={videoId} href={`/video/${videoId}`}>
                        <VideoThumbnail videoId={videoId} />
                    </Link>
                );
            })}
        </>
    );
}

export function getServerSideProps() {
    const videos = getAllVideos();
    return {
        props: {
            videos,
        }
    }
}

export default VideosSSR;