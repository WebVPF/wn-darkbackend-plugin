document.addEventListener("DOMContentLoaded", function() {
    var theme = localStorage.getItem('backendTheme'),
        $body = document.querySelector('body'),
        lang = document.querySelector('html').getAttribute('lang'),
        textCheckbox = {
            en: 'Dark Theme',
            ru: 'Тёмная тема'
        },
        txtLang = textCheckbox[lang] ? textCheckbox[lang] : 'Dark Theme';

    theme == 'dark' ? $body.classList.add('dark') : 0;

    var toggleTheme = document.createElement('li');
    toggleTheme.className = 'dark-theme';
    toggleTheme.innerHTML = '<div class="checkbox custom-checkbox" style="margin:5px 30px 4px"><label for="darkTheme">' + txtLang + '</label></div>';

    var checkTheme = document.createElement('input');
    checkTheme.id = 'darkTheme';
    checkTheme.setAttribute('name', 'checkbox');
    checkTheme.setAttribute('type', 'checkbox');
    theme == 'dark' ? checkTheme.setAttribute('checked', 'checked') : 0;

    toggleTheme.querySelector('label').before(checkTheme);

    document.querySelector('.mainmenu-accountmenu li.divider').before(toggleTheme);

    checkTheme.addEventListener('input', function() {
        if (checkTheme.checked) {
            $body.classList.add('dark');
            localStorage.setItem('backendTheme', 'dark');
        }
        else {
            $body.classList.remove('dark');
            localStorage.removeItem('backendTheme');
        }
    });
});
