import { getAllVideos } from "@/models/videos";
import Video from "@/components/Video";

function Videos() {
    const videos = getAllVideos();
    return(
        <>
            <h1>Videos Page</h1>

            {videos.map(({ videoId }) => {
                return (
                    <Video key={videoId} videoId={videoId} />
                );
            })}
        </>
    );
}

export default Videos;