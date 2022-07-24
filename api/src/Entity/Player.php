<?php
declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PlayerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
#[ApiResource(
//    iri: 'player',
//    shortName: 'player',
    attributes: [
        'normalization_context' => ['groups' => ['player:read', 'user:read'], 'swagger_definition_name' => 'read'],
        'denormalization_context' => ['groups' => ['user:write'], 'swagger_definition_name' => 'write'],
    ],
)]
class Player
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['player:read'])]
    private int $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['player:read', 'user:read', 'user:write'])]
    private string $name;

    #[ORM\OneToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id')]
    #[Groups(['player:read'])]
    private User $user;

    #[ORM\OneToMany(mappedBy: 'player', targetEntity: Word::class)]
    private Collection $words;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['player:read', 'user:read'])]
    #[Gedmo\Timestampable(on: 'create')]
    private \DateTimeImmutable $created_at;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['player:read', 'user:read'])]
    #[Gedmo\Timestampable(on: 'create')]
    private \DateTimeImmutable $updated_at;

    public function __construct()
    {
        $this->words = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return \DateTimeImmutable
     */
    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updated_at;
    }

    /**
     * @param \DateTimeImmutable $updated_at
     * @return Player
     */
    public function setUpdatedAt(\DateTimeImmutable $updated_at): Player
    {
        $this->updated_at = $updated_at;
        return $this;
    }

//    #[ApiProperty]
//    #[Groups(['player:read'])]
//    public function getEmail(): ?string
//    {
//        return $this->user->getEmail();
//    }
//
//    public function setEmail(string $email): self
//    {
//        $this->email = $email;
//
//        return $this;
//    }

    /**
     * @return Collection|Word[]
     */
    public function getWords(): Collection
    {
        return $this->words;
    }

    public function addWord(Word $word): self
    {
        if (!$this->words->contains($word)) {
            $this->words[] = $word;
            $word->setPlayer($this);
        }

        return $this;
    }

    public function removeWord(Word $word): self
    {
        if ($this->words->removeElement($word)) {
            // set the owning side to null (unless already changed)
            if ($word->getPlayer() === $this) {
                $word->setPlayer(null);
            }
        }

        return $this;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @param User $user
     * @return Player
     */
    public function setUser(User $user): Player
    {
        $this->user = $user;
        return $this;
    }
}
