// DOM 元素
const searchPage = document.getElementById('search-page');
const background = document.getElementById('background');
const gotoBookmarksPageBtn = document.getElementById('goto-bookmarks-page');
const changeBgBtn = document.getElementById('change-bg-btn');
const showBookmarksBtn = document.getElementById('show-bookmarks-btn');
const bookmarksContainer = document.getElementById('bookmarks-container');
const searchEngineBtns = document.querySelectorAll('.search-engine-btn');

// 切换到收藏页面
function goToBookmarksPage() {
    searchPage.classList.add('opacity-0');
    setTimeout(() => {
        window.location.href = 'bookmarks.html';
    }, 300);
}

// 显示/隐藏收藏卡片
function toggleBookmarks() {
    if (bookmarksContainer.classList.contains('opacity-0')) {
        // 生成收藏卡片
        bookmarksContainer.innerHTML = '';
        
        const cardGrid = document.createElement('div');
        cardGrid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4';
        
        bookmarks.forEach(bookmark => {
            const card = document.createElement('a');
            card.href = bookmark.url;
            card.target = '_blank';
            card.className = 'bg-white/90 backdrop-blur rounded-xl shadow-card p-3 flex flex-col items-center text-center card-hover transform transition-all duration-300 opacity-0 translate-y-4';
            card.style.animation = `fadeInUp 0.4s ${bookmarks.indexOf(bookmark) * 0.05}s forwards`;
            
            card.innerHTML = `
                <div class="w-10 h-10 rounded-full flex items-center justify-center mb-2" style="background-color: ${bookmark.color}">
                    <i class="fa ${bookmark.icon} text-white"></i>
                </div>
                <h3 class="font-medium text-gray-800 text-sm">${bookmark.name}</h3>
            `;
            
            cardGrid.appendChild(card);
        });
        
        bookmarksContainer.appendChild(cardGrid);
        
        // 显示收藏容器
        setTimeout(() => {
            bookmarksContainer.classList.remove('opacity-0');
        }, 50);
    } else {
        // 隐藏收藏容器
        bookmarksContainer.classList.add('opacity-0');
        setTimeout(() => {
            bookmarksContainer.innerHTML = '';
        }, 300);
    }
}

// 切换搜索引擎
function setupSearchEngineToggle() {
    searchEngineBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active类
            searchEngineBtns.forEach(b => b.classList.remove('active'));
            // 给当前点击的按钮添加active类
            btn.classList.add('active');
        });
    });
}

// 事件监听
gotoBookmarksPageBtn.addEventListener('click', goToBookmarksPage);
changeBgBtn.addEventListener('click', () => changeBackground(background));
showBookmarksBtn.addEventListener('click', toggleBookmarks);

// 初始化
setupSearchEngineToggle();
