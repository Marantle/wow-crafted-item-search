import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CraftedItem } from "@/types/craftingTypes";
import ItemBadges from "./CraftedItemResult/ItemBadges";
import MaterialsList from "./CraftedItemResult/MaterialsList";
import { skillBoosters } from "@/data/craftedItems";

interface ComparisonToolProps {
  items: CraftedItem[];
  onRemoveItem: (itemId: number) => void;
}

export default function ComparisonTool({
  items,
  onRemoveItem,
}: ComparisonToolProps) {
  const [truncatedMaterials, setTruncatedMaterials] = useState<
    Record<number, number[]>
  >({});
  const materialRefs = useRef<Record<number, (HTMLSpanElement | null)[]>>({});

  if (items.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold mb-4">Item Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.slice(0, 2).map((item) => (
            <div key={item.id} className="border rounded p-4 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => onRemoveItem(item.id)}
                aria-label={`Remove ${item.name} from comparison`}
              >
                <X className="h-4 w-4" />
              </Button>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {item.crafter} ({item.realm})
              </p>
              <ItemBadges
                itemLevel={item.itemLevel}
                embellishedQuality={item.embellishedQuality}
                missiveQuality={item.missiveQuality}
                concentrate={item.concentrate}
                skillBooster={
                  item.skillBoosterId
                    ? skillBoosters.find(
                        (booster) => booster.id === item.skillBoosterId
                      )
                    : undefined
                }
                tags={item.tags}
                className="mb-4"
              />
              <h4 className="font-semibold mt-4 mb-2">Required Materials</h4>
              <MaterialsList
                materials={item.materials}
                truncatedMaterials={truncatedMaterials[item.id] || []}
                materialRefs={materialRefs.current[item.id] || []}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
