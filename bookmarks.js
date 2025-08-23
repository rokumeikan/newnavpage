// DOM 元素
const bookmarksPage = document.getElementById('bookmarks-page');
const backToSearchBtn = document.getElementById('back-to-search');
const backFromBookmarksBtn = document.getElementById('back-from-bookmarks');
const bookmarksBackground = document.getElementById('bookmarks-background');
const changeBgBtnBookmarks = document.getElementById('change-bg-btn-bookmarks');

// 切换到搜索页面
function goToSearchPage() {
    bookmarksPage.classList.add('opacity-0');
    setTimeout(() => {
        window.location.href = '/';
    }, 300);
}

// 事件监听
backToSearchBtn.addEventListener('click', goToSearchPage);
backFromBookmarksBtn.addEventListener('click', goToSearchPage);
changeBgBtnBookmarks.addEventListener('click', () => changeBackground(bookmarksBackground));
