"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { skillBoosters } from "@/data/craftedItems";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import MaterialsList from "@/components/CraftedItemResult/MaterialsList";
import ItemHeader from "@/components/CraftedItemResult/ItemHeader";
import ItemBadges from "@/components/CraftedItemResult/ItemBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CraftedItem } from "@/types/craftingTypes";

interface RecipePageClientProps {
  item: CraftedItem | undefined;
}

export default function RecipePageClient({ item }: RecipePageClientProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [materialRefs, setMaterialRefs] = useState<(HTMLSpanElement | null)[]>(
    []
  );

  useEffect(() => {
    if (item) {
      setMaterialRefs(new Array(item.materials.length).fill(null));
    }
  }, [item]);

  const skillBooster = item?.skillBoosterId
    ? skillBoosters.find((booster) => booster.id === item.skillBoosterId)
    : undefined;

  if (!item) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Reseptin tiedot</h1>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Takaisin hakuun
            </Button>
          </Link>
        </div>
        <p className="text-center text-gray-500">
          Esinettä ei löytynyt. Tarkista esineen ID URL-osoitteessa.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reseptin tiedot</h1>
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Takaisin hakuun
          </Button>
        </Link>
      </div>
      <Card className="mb-4 overflow-hidden">
        <CardContent className="p-4">
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
            <MaterialsList
              materials={item.materials}
              materialRefs={materialRefs}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
