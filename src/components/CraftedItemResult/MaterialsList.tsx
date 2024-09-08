import Image from "next/image";
import { materials } from "@/data/craftedItems";
import { CraftedItemMaterial } from "@/types/craftingTypes";
import { getMaterialIconFilename } from "@/lib/utils";

interface MaterialsListProps {
  materials: CraftedItemMaterial[];
  materialRefs: (HTMLSpanElement | null)[];
}

export default function MaterialsList({
  materials: itemMaterials,
  materialRefs,
}: MaterialsListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {itemMaterials.map((materialItem, index) => {
        const material = materials.find(
          (m) => m.id === materialItem.materialId
        );
        if (!material) return null;
        const iconFilename = getMaterialIconFilename(material.id);
        return (
          <li key={index} className="flex items-center">
            <div className="flex items-center flex-grow">
              <div className="relative mr-2 flex-shrink-0">
                <Image
                  src={`/materials/${iconFilename}`}
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
                      width={materialItem.quality === 1 ? 12 : 24}
                      height={materialItem.quality === 1 ? 12 : 24}
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
            </div>
          </li>
        );
      })}
    </ul>
  );
}
