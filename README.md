# Dark Backend

Plugin for Winter CMS

This plugin adds a dark theme switch to the user’s menu in backend of site. Now you can switch to dark theme for backend in one click.

![switch](https://user-images.githubusercontent.com/61043464/145829071-8ca9fd28-7928-49a6-8ccc-f45b08467102.jpg)

Plugin screenshot gallery: https://github.com/WebVPF/wn-darkbackend-plugin/issues/6

## Installation Сomposer:

```bash
composer require webvpf/wn-darkbackend-plugin
```

## Styles

When dark mode is enabled, the plugin script adds `dark` class for `body` tag. Therefore, to override the standard styles, you need to add `body.dark` before the selector name.

```css
body.dark .className {

}
```

### CSS Variables

https://github.com/WebVPF/wn-darkbackend-plugin/blob/master/assets/css/dark.css#L1-L11

## Translation for switch text

Write a comment here: https://github.com/WebVPF/wn-darkbackend-plugin/issues/1 where specify language code and translation for text **Dark Theme** in your language.

### How to find out language code

Open backend home page and in page code look at the value of `lang` attribute for `<html>` tag (e.g.: `lang="en"`). This is your language code.

---

Protect your eyes!
