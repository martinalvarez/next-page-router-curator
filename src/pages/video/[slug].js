import { useRouter } from "next/router";
import VideoComponent from "@/components/Video";

function Video() {
    const router = useRouter();
    const { slug: videoId } = router.query;

    return(
        <>
            <h1>Video</h1>
            
            <VideoComponent videoId={videoId} />
        </>
    );
}

export default Video;