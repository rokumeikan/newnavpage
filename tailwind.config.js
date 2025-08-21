tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0071e3', // Mac风格蓝色
                secondary: '#f5f5f7', // 浅灰色背景
                'mac-dark': '#1c1c1e', // 深色模式背景
                'mac-gray': '#8e8e93', // 灰色文本
                'mac-light': '#f8f8f8', // 浅色背景
                'dock-bg': 'rgba(255, 255, 255, 0.7)', // Dock栏背景（浅色）
                'dock-bg-dark': 'rgba(30, 30, 30, 0.7)', // Dock栏背景（深色）
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            boxShadow: {
                'mac': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'mac-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
                'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
            }
        },
    }
}
