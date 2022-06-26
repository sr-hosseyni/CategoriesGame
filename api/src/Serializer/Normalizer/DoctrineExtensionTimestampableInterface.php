<?php

namespace App\Serializer\Normalizer;

interface DoctrineExtensionTimestampableInterface
{
    /**
     * @return \DateTime
     */
    public function getCreatedAt();

    /**
     * @return \DateTime
     */
    public function getUpdatedAt();
}
