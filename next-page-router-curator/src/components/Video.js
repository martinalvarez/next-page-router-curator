import styles from './Video.module.css';

function Video({videoId}) {
    return(
        <div className={styles.videoPlayer}>
            <iframe
                width="100%"
                height="100%"    
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>         
        </div>

    );
}

export default Video;