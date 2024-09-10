"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { skillBoosters } from "@/data/craftedItems";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CraftedItem } from "@/types/craftingTypes";
import ErrorState from "./ErrorState";
import RecipeContent from "./RecipeContent";

interface RecipePageClientProps {
  item: CraftedItem | undefined;
}

export default function RecipePageClient({ item }: RecipePageClientProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [materialRefs, setMaterialRefs] = useState<(HTMLSpanElement | null)[]>(
    []
  );

  useEffect(() => {
    if (item?.materials) {
      setMaterialRefs(Array(item.materials.length).fill(null));
    }
  }, [item?.materials]);

  const skillBooster = item?.skillBoosterId
    ? skillBoosters.find((booster) => booster.id === item.skillBoosterId)
    : undefined;

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
          {!item ? (
            <ErrorState />
          ) : (
            <RecipeContent
              item={item}
              skillBooster={skillBooster}
              titleRef={titleRef}
              materialRefs={materialRefs}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
