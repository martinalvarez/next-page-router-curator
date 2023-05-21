import { getAllVideos } from "@/models/videos";

function Videos() {
    const videos = getAllVideos();
    return(
        <>
            <h1>Videos Page</h1>

            {videos.map(({ videoId }) => {
                return (
                    <iframe
                        key={videoId}
                        width="100%"
                        height="100%"    
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe> 
                );
            })}

        </>
    );
}

export default Videos;