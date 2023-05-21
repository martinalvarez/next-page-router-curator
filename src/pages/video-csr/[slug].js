import { useRouter } from "next/router";
import VideoComponent from "@/components/Video";
import { getAllVideos } from "@/models/videos";

function Video() {
    const router = useRouter();
    const { slug: videoId } = router.query;

    return(
        <>
            <h1>Video Page</h1>
            
            <VideoComponent videoId={videoId} />
        </>
    );
}

export default Video;

export function getStaticPaths() {
    const paths = getAllVideos().map(({ videoId }) => {
        return {
            params: {
                slug: videoId,
            }
        };
    });

    return {
        fallback: false,
        paths, 

    }
}

export function getStaticProps({ params: { slug } }) {
    const video = getAllVideos().filter(({ videoId }) => videoId === slug );
    return {
        props: {
            slug: video,
        }
    }
}