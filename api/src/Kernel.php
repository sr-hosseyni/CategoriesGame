<?php

namespace App;

use Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

//    public function registerBundles(): iterable
//    {
//        return [
//            new StofDoctrineExtensionsBundle(),
//        ];
//    }
}
