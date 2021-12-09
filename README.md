# Dark Backend - Plugin for Winter CMS

This plugin adds a dark theme switch to the user’s menu in backend of site. Now you can switch to dark theme for backend in one click.

Protect your eyes!

Plugin screenshot gallery: https://github.com/WebVPF/wn-darkbackend-plugin/issues/6

## Install

Installation Сomposer:

```
composer require webvpf/wn-darkbackend-plugin
```

## Custom skins

As a dark theme, you can use your own styles. To do this, simply add a file called `custom.css` to **plugins/webvpf/darkbackend/assets/css/** folder. As a dark theme, the system will take styles from this file.

When dark mode is enabled, the plugin script adds `dark` class for `body` tag. Therefore, to override the standard styles, you need to add `body.dark` before the selector name.

```css
body.dark .className {

}
```

---

## Translation for switch text

Write a comment here: https://github.com/WebVPF/wn-darkbackend-plugin/issues/1 where specify language code and translation for text **Dark Theme** in your language.

### How to find out language code

Open backend home page and in page code look at the value of `lang` attribute for `<html>` tag (e.g.: `lang="en"`). This is your language code.

---

## Тёмный бекенд - Плагин для Winter CMS

Добавляет в бекенде Winter CMS в меню пользователя переключатель на тёмную тему. Теперь вы можете переключиться на темную тему для бэкэнда одним щелчком мыши.

Берегите зрение!

## Пользовательские скины

В качестве тёмной темы вы можете использовать свои собственные стили. Для этого просто добавьте в папку **plugins/webvpf/darkbackend/assets/css/** файл с названием `custom.css`. В качестве тёмной темы система будет брать стили из этого файла. При обновлении плагина файл не потеряется.

При включении тёмного режима, скрипт плагина добавляет класс `dark` для тега `body`. Поэтому для переопределения стандартных стилей вам нужно добавить перед названием селектора `body.dark`.

```css
body.dark .className {

}
```
