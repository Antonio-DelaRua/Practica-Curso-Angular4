<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit080d5167808aa75c8b1686c0d05cec23
{
    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'PiramideUploader' => __DIR__ . '/../..' . '/piramide-uploader/PiramideUploader.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit080d5167808aa75c8b1686c0d05cec23::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit080d5167808aa75c8b1686c0d05cec23::$classMap;

        }, null, ClassLoader::class);
    }
}