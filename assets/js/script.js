const darkBackend = {
    keyStorage: 'backendTheme',

    event() {
        document.addEventListener('modeDarkEnabled', this.enable.bind(this));
        document.addEventListener('modeDarkDisabled', this.disable.bind(this));
    },

    createCheck() {
        let eventEnable = new Event('modeDarkEnabled'),
            eventDisable = new Event('modeDarkDisabled');

        let checkTheme = document.createElement('input');
        checkTheme.id = 'darkTheme';
        checkTheme.setAttribute('type', 'checkbox');

        if (localStorage.getItem(this.keyStorage) === 'dark') {
            checkTheme.setAttribute('checked', 'checked')
        }

        checkTheme.addEventListener('input', () => {
            document.dispatchEvent( checkTheme.checked ? eventEnable : eventDisable )
        });

        return checkTheme
    },

    createToggle() {
        let lang = document.querySelector('html').getAttribute('lang'),
            textCheckbox = {
                en: 'Dark Theme',
                ru: 'Тёмная тема',
                uk: 'Темна тема'
            },
            txtLang = textCheckbox[lang] ? textCheckbox[lang] : textCheckbox['en'];

        let toggleTheme = document.createElement('li');
        toggleTheme.innerHTML = `<div class="checkbox custom-checkbox" style="margin:5px 30px 4px">
                                     <label for="darkTheme">${ txtLang }</label>
                                 </div>`;

        toggleTheme.querySelector('label').before( this.createCheck() );

        return toggleTheme
    },

    disable() {
        document.querySelector('body').classList.remove('dark');

        localStorage.removeItem(this.keyStorage);
    },

    enable() {
        document.querySelector('body').classList.add('dark');

        localStorage.setItem(this.keyStorage, 'dark');
    },

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem(this.keyStorage) === 'dark') {
                document.querySelector('body').classList.add('dark')
            }

            document.querySelector('.mainmenu-accountmenu li.divider').before( this.createToggle() )
        });

        this.event()
    }
}

darkBackend.init();
