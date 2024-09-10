import { useRef } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Scale, Hammer, User, ExternalLink } from "lucide-react";
import { CraftedItem } from "@/types/craftingTypes";
import ItemBadges from "./ItemBadges";
import MaterialsList from "./MaterialsList";
import { skillBoosters } from "@/data/craftedItems";

interface CraftedItemResultProps {
  item: CraftedItem;
  onToggleFavorite: (itemId: number) => void;
  onToggleCompare: (itemId: number) => void;
  isFavorite: boolean;
  isComparing: boolean;
}

export default function CraftedItemResult({
  item,
  onToggleFavorite,
  onToggleCompare,
  isFavorite,
  isComparing,
}: CraftedItemResultProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const skillBooster = item.skillBoosterId
    ? skillBoosters.find((booster) => booster.id === item.skillBoosterId)
    : undefined;

  return (
    <Card className="mb-4 overflow-hidden" data-testid="recipe-card">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div className="flex items-center mb-2 sm:mb-0">
            <Hammer className="w-5 h-5 mr-2 flex-shrink-0" />
            <h2
              ref={titleRef}
              className="text-lg font-semibold truncate"
              data-testid="recipe-name"
            >
              {item.name}
            </h2>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">
              {item.crafter} ({item.realm})
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <ItemBadges
            itemLevel={item.itemLevel}
            embellishedQuality={item.embellishedQuality}
            missiveQuality={item.missiveQuality}
            concentrate={item.concentrate}
            skillBooster={skillBooster}
            tags={item.tags}
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Required Materials</h3>
          <MaterialsList materials={item.materials} materialRefs={[]} />
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onToggleFavorite(item.id)}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            data-testid="favorite-button"
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500" : ""}`} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onToggleCompare(item.id)}
            aria-label={
              isComparing ? "Remove from comparison" : "Add to comparison"
            }
          >
            <Scale
              className={`h-4 w-4 ${isComparing ? "text-blue-500" : ""}`}
            />
          </Button>
          <Link href={`/recipe/${item.id}`} passHref>
            <Button
              variant="outline"
              size="sm"
              aria-label="View full recipe details"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
