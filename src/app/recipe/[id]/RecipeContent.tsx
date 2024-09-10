import { RefObject } from "react";
import MaterialsList from "@/components/CraftedItemResult/MaterialsList";
import ItemHeader from "@/components/CraftedItemResult/ItemHeader";
import ItemBadges from "@/components/CraftedItemResult/ItemBadges";
import { CraftedItem, SkillBooster } from "@/types/craftingTypes";

interface RecipeContentProps {
  item: CraftedItem;
  skillBooster: SkillBooster | undefined;
  titleRef: RefObject<HTMLHeadingElement>;
  materialRefs: (HTMLSpanElement | null)[];
}

export default function RecipeContent({
  item,
  skillBooster,
  titleRef,
  materialRefs,
}: RecipeContentProps) {
  return (
    <>
      <ItemHeader
        name={item.name}
        crafter={item.crafter}
        realm={item.realm}
        titleRef={titleRef}
      />
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
        <MaterialsList materials={item.materials} materialRefs={materialRefs} />
      </div>
    </>
  );
}
