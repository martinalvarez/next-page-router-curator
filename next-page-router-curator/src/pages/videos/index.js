import { getAllVideos } from "@/models/videos";
import VideoThumbnail from "@/components/VideoThumbnail";

function Videos() {
    const videos = getAllVideos();
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

export default Videos;