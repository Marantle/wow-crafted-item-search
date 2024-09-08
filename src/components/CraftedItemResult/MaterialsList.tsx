import Image from "next/image";
import { Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { materials } from "@/data/craftedItems";
import { getIconFilename } from "@/lib/utils";
import { CraftedItemMaterial } from "@/types/craftingTypes";

interface MaterialsListProps {
  materials: CraftedItemMaterial[];
  truncatedMaterials: number[];
  materialRefs: (HTMLSpanElement | null)[];
}

export default function MaterialsList({
  materials: itemMaterials,
  truncatedMaterials,
  materialRefs,
}: MaterialsListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {itemMaterials.map((materialItem, index) => {
        const material = materials.find(
          (m) => m.id === materialItem.materialId
        );
        if (!material) return null;
        return (
          <li key={index} className="flex items-center">
            <div className="flex items-center flex-grow">
              <div className="relative mr-2 flex-shrink-0">
                <Image
                  src={`/materials/${getIconFilename(material.name)}`}
                  alt={material.name}
                  width={48}
                  height={48}
                  className="rounded-md"
                />
                {materialItem.quality > 0 && (
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <Image
                      src={`/icons/${materialItem.quality}.png`}
                      alt={`Quality ${materialItem.quality}`}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                )}
              </div>
              <span
                ref={(el) => {
                  if (materialRefs) {
                    materialRefs[index] = el;
                  }
                }}
                className="truncate text-sm sm:text-base"
              >
                {materialItem.quantity} x {material.name}
              </span>
              {truncatedMaterials.includes(index) && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-6 w-6 ml-1"
                    >
                      <Info className="h-4 w-4" />
                      <span className="sr-only">More info</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-2">
                    <p>
                      {materialItem.quantity} x {material.name}
                    </p>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
