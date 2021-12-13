<?php namespace WebVPF\DarkBackend;

use System\Classes\PluginBase;
use App;
use Event;

class Plugin extends PluginBase
{

    public function pluginDetails()
    {
        return [
            'name'        => 'webvpf.darkbackend::lang.plugin.name',
            'description' => 'webvpf.darkbackend::lang.plugin.desc',
            'author'      => 'WebVPF',
            'icon'        => 'icon-adjust'
        ];
    }

    public function boot()
    {
        if (!App::runningInBackend()) {
            return;
        }

        Event::listen('backend.page.beforeDisplay', function($controller, $action, $params) {
            $filename = 'plugins/webvpf/darkbackend/assets/css/custom.css';

            if (file_exists($filename)) {
                $controller->addCss('/' . $filename);
            }
            else {
                $controller->addCss('/plugins/webvpf/darkbackend/assets/css/dark.css', [
                    'build' => 'WebVPF.DarkBackend'
                ]);
            }
            
            $controller->addJs('/plugins/webvpf/darkbackend/assets/js/script.js');
        });
    }

}
