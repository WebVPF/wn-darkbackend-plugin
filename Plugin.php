<?php namespace WebVPF\DarkBackend;

use System\Classes\PluginBase;
use App;
use Event;

class Plugin extends PluginBase
{
    public function pluginDetails(): array
    {
        return [
            'name'        => 'webvpf.darkbackend::lang.plugin.name',
            'description' => 'webvpf.darkbackend::lang.plugin.desc',
            'author'      => 'WebVPF',
            'icon'        => 'icon-adjust',
            'homepage'    => 'https://github.com/WebVPF/wn-darkbackend-plugin',
        ];
    }

    public function boot(): void
    {
        if (!App::runningInBackend()) {
            return;
        }

        Event::listen('backend.page.beforeDisplay', function($controller, $action, $params) {
            $controller->addCss('/plugins/webvpf/darkbackend/assets/css/dark.css', 'WebVPF.DarkBackend');
            $controller->addJs('/plugins/webvpf/darkbackend/assets/js/script.js', 'WebVPF.DarkBackend');
        });
    }
}
