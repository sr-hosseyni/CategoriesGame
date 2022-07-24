<?php

namespace App\DataTransformer\Game;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;
use App\Entity\Game;

class GameInputDataTransformer implements DataTransformerInterface
{

    public function transform($object, string $to, array $context = [])
    {
        $book = new Game();
        $book->setDescription($object->description);

        return $book;
    }

    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        // in the case of an input, the value given here is an array (the JSON decoded).
        // if it's a game we transformed the data already
        if ($data instanceof Game) {
            return false;
        }

        return Game::class === $to && null !== ($context['input']['class'] ?? null);
    }
}
