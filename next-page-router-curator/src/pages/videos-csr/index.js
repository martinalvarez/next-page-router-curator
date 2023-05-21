import { getAllVideos } from "@/models/videos";
import VideoThumbnail from "@/components/VideoThumbnail";

function VideosCSR({ videos }) {
    return(
        <>
            <h1>Videos Page</h1>

            {videos.map(({ videoId }) => {
                return (
                    <VideoThumbnail key={videoId} videoId={videoId} />
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