const videos = [
    {
        videoId: 'PVKF3vApBfo',
    },
    {
        videoId: 'J8ArEhg3JR0',
    },    
    {
        videoId: '5hyCyXO8hiQ',
    },    
    {
        videoId: '_kkWwUBxFCM',
    },    
    {
        videoId: '01Zk-hpiqSo',
    },    
    {
        videoId: '4oL-mdPQEtM',
    },    
    {
        videoId: 'ty9FgvkgsW8',
    },    
    {
        videoId: 'LDQgj23tIJw',
    },    
    {
        videoId: 'fUauc_38Fxs',
    },    
    {
        videoId: 'WV2aKtsNQ50',
    },    
    {
        videoId: 't0I9ygFbFHo',
    },    
    {
        videoId: '0FQ3Ucml458',
    },    
];

export function getAllVideos() {
    return videos;
}

export function asyncGetAllVideos() {
    const random = Math.floor(Math.random() * 2000);
    
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (random % 2 === 0) {
                resolve(videos);
            } else {
                reject('Error getting videos');
            }
        }, 1000);
    })
}