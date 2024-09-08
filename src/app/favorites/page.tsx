"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CraftedItemResult from "@/components/CraftedItemResult";
import ComparisonTool from "@/components/ComparisonTool";
import { useFavorites } from "@/hooks/useFavorites";
import { craftedItemsData } from "@/data/craftedItems";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [comparing, setComparing] = useState<number[]>([]);

  const favoriteItems = useMemo(() => {
    return craftedItemsData.filter((item) => favorites.includes(item.id));
  }, [favorites]);

  const toggleCompare = (itemId: number) => {
    setComparing((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      }
      if (prev.length < 3) {
        return [...prev, itemId];
      }
      return prev;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Suosikkireseptit</h1>
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Takaisin hakuun
          </Button>
        </Link>
      </div>

      {favoriteItems.length > 0 && (
        <ComparisonTool
          items={favoriteItems.filter((item) => comparing.includes(item.id))}
          onRemoveItem={toggleCompare}
        />
      )}

      <div className="mt-8">
        {favoriteItems.length === 0 ? (
          <p className="text-center text-gray-500">
            Et ole vielä lisännyt suosikkeja.
          </p>
        ) : (
          favoriteItems.map((item) => (
            <CraftedItemResult
              key={item.id}
              item={item}
              onToggleFavorite={toggleFavorite}
              onToggleCompare={toggleCompare}
              isFavorite={true}
              isComparing={comparing.includes(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
