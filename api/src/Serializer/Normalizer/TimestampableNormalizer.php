<?php

namespace App\Serializer\Normalizer;

use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class TimestampableNormalizer implements NormalizerInterface
{
    private NormalizerInterface $normalizer;

//    public function __construct(NormalizerInterface $normalizer)
//    {
//        $this->normalizer = $normalizer;
//    }

    /**
     * @param DoctrineExtensionTimestampableInterface $object
     * @return array
     * @throws \Symfony\Component\Serializer\Exception\ExceptionInterface
     */
    public function normalize(mixed $object, string $format = null, array $context = array())
    {
        $normalized = $this->normalizer->normalize($object);
        $normalized['createdAt'] = $object->getCreatedAt();
        $normalized['updatedAt'] = $object->getUpdatedAt();

        return $normalized;
    }

    public function supportsNormalization($data, $format = null)
    {
        return $data instanceof DoctrineExtensionTimestampableInterface;
    }
}
