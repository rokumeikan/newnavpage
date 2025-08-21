// 背景图片数组
const backgroundImages = [
    'https://picsum.photos/id/1015/1920/1080', // 山脉
    'https://picsum.photos/id/1018/1920/1080', // 云
    'https://picsum.photos/id/1019/1920/1080', // 水
    'https://picsum.photos/id/1039/1920/1080', // 森林
    'https://picsum.photos/id/1043/1920/1080', // 田野
    'https://picsum.photos/id/1044/1920/1080', // 雪景
    'https://picsum.photos/id/1051/1920/1080', // 海岸线
];

// 当前背景图片索引
let currentBgIndex = 0;

// 收藏数据
const bookmarks = [
    { name: 'GitHub', url: 'https://www.github.com', icon: 'fa-github', color: '#24292e', category: '工具类' },
    { name: 'YouTube', url: 'https://www.youtube.com', icon: 'fa-youtube-play', color: '#FF0000', category: '娱乐类' },
    { name: 'Twitter', url: 'https://www.twitter.com', icon: 'fa-twitter', color: '#1DA1F2', category: '社交媒体' },
    { name: 'Google', url: 'https://www.google.com', icon: 'fa-google', color: '#4285F4', category: '工具类' },
    { name: 'Netflix', url: 'https://www.netflix.com', icon: 'fa-film', color: '#E50914', category: '娱乐类' },
    { name: 'Spotify', url: 'https://www.spotify.com', icon: 'fa-spotify', color: '#1DB954', category: '娱乐类' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fa-linkedin', color: '#0A66C2', category: '社交媒体' },
    { name: 'Stack Overflow', url: 'https://www.stackoverflow.com', icon: 'fa-stack-overflow', color: '#F48024', category: '工具类' },
];

// 共用的更换背景图片函数
function changeBackground(backgroundElement) {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
    const newBg = backgroundImages[currentBgIndex];
    
    // 淡出当前背景
    backgroundElement.style.opacity = '0';
    
    setTimeout(() => {
        // 更换背景图片
        backgroundElement.style.backgroundImage = `url('${newBg}')`;
        
        // 淡入新背景
        backgroundElement.style.opacity = backgroundElement.id === 'background' ? '0.2' : '0.1';
    }, 1000);
}
    