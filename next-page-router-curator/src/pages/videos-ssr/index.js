import { getAllVideos } from "@/models/videos";
import VideoThumbnail from "@/components/VideoThumbnail";

function VideosSSR({ videos }) {
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

export function getServerSideProps() {
    const videos = getAllVideos();
    return {
        props: {
            videos,
        }
    }
}

export default VideosSSR;