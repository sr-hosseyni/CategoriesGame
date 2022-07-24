<?php
declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Dto\Game\GameInput;
use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Gedmo\Mapping\Annotation as Gedmo;

#[ORM\Entity(repositoryClass: GameRepository::class)]
#[ApiResource(
    shortName: 'game',
    attributes: [
        'normalization_context' => ['groups' => ['game:read'], 'swagger_definition_name' => 'read'],
        'denormalization_context' => ['groups' => ['game:write'], 'swagger_definition_name' => 'write'],
    ],
)]
class Game
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['game:read'])]
    private int $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['game:read', 'game:write'])]
    private string $description = '';

    #[ORM\OneToMany(mappedBy: 'game', targetEntity: Round::class, orphanRemoval: true)]
    private Collection $rounds;

    #[ORM\ManyToMany(targetEntity: Category::class, mappedBy: 'games')]
    private Collection $categories;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['game:read'])]
    #[Gedmo\Timestampable(on: 'create')]
    private \DateTimeImmutable $created_at;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['game:read'])]
    #[Gedmo\Timestampable(on: 'create')]
    private \DateTimeImmutable $updated_at;

    public function __construct()
    {
        $this->rounds = new ArrayCollection();
        $this->categories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return Game
     */
    public function setDescription(string $description): Game
    {
        $this->description = $description;
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
     * @return Game
     */
    public function setUpdatedAt(\DateTimeImmutable $updated_at): Game
    {
        $this->updated_at = $updated_at;
        return $this;
    }

    /**
     * @return Collection<int,Round>
     */
    public function getRounds(): Collection
    {
        return $this->rounds;
    }

    public function addRound(Round $round): self
    {
        if (!$this->rounds->contains($round)) {
            $this->rounds[] = $round;
            $round->setGame($this);
        }

        return $this;
    }

    public function removeRound(Round $round): self
    {
        if ($this->rounds->removeElement($round)) {
            // set the owning side to null (unless already changed)
            if ($round->getGame() === $this) {
                $round->setGame(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int,Category>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addGame($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->removeElement($category)) {
            $category->removeGame($this);
        }

        return $this;
    }
}
