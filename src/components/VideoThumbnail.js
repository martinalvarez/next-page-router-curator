import Image from "next/image";
function VideoThumbnail({videoId}) {
    const src = `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;
    const width = 1280 / 4;
    const height = 720 / 4;

    return(
        <Image
            alt="Video"
            src={src} 
            width={width}
            height={height}
        />
    );
}

export default VideoThumbnail;