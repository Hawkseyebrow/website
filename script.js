function switchTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.theme-btn[onclick="switchTheme('${theme}')"]`).classList.add('active');

        localStorage.setItem('theme', theme);
    }

function switchLang(lang) {
    document.querySelectorAll('[data-en][data-pl]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
            if (el.children.length > 0) {
            const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
            if (textNode) {
                textNode.textContent = text + ' ';
            }
        } else {
            el.textContent = text;
        }
    });

    document.documentElement.lang = lang;
    document.title = lang === 'pl' ? 'O mnie' : 'About Me';

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="switchLang('${lang}')"]`).classList.add('active');

    localStorage.setItem('lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    const activeThemeBtn = document.querySelector(`.theme-btn[onclick="switchTheme('${savedTheme}')"]`);
    if (activeThemeBtn) activeThemeBtn.classList.add('active');

    const savedLang = localStorage.getItem('lang') || 'en';
    switchLang(savedLang);

    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 50);
});
