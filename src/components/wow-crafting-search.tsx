"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import CraftedItemResult from "@/components/CraftedItemResult";
import ComparisonTool from "@/components/ComparisonTool";
import { craftedItemsData } from "@/data/craftedItems";
import { useFavorites } from "@/hooks/useFavorites";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function WowCraftingSearch() {
  const { favorites, toggleFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [comparing, setComparing] = useState<number[]>([]);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return craftedItemsData;

    const searchTerms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);

    return craftedItemsData.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemCrafter = item.crafter.toLowerCase();
      const itemTags = item.tags.map((tag) => tag.toLowerCase());
      const itemLevel = item.itemLevel.toString();

      return searchTerms.every(
        (term) =>
          itemName.includes(term) ||
          itemCrafter.includes(term) ||
          itemTags.some((tag) => tag.includes(term)) ||
          itemLevel.includes(term)
      );
    });
  }, [searchTerm]);

  const toggleCompare = useCallback((itemId: number) => {
    setComparing((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      }
      if (prev.length < 3) {
        return [...prev, itemId];
      }
      return prev;
    });
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleItemSelect = useCallback((currentValue: string) => {
    setSearchTerm(currentValue);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1
          className="text-3xl font-bold mb-4 sm:mb-0"
          data-testid="page-title"
        >
          Maakon budjettireseptit
        </h1>
        <Link href="/favorites" data-testid="favorites-link">
          <Button variant="outline">
            <Heart className="mr-2 h-4 w-4" />
            Suosikit
          </Button>
        </Link>
      </div>
      <div className="mb-4">
        <Command shouldFilter={false} className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Hae reseptejä nimen, käsityöläisen, levelin tai tagien perusteella..."
            value={searchTerm}
            onValueChange={handleSearchChange}
            className="w-full"
          />
          <CommandList className="max-h-[300px] overflow-y-auto rounded-b-lg">
            <CommandEmpty>Reseptejä ei löytynyt.</CommandEmpty>
            <CommandGroup>
              {filteredItems.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={handleItemSelect}
                >
                  <div>
                    <div>{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Level: {item.itemLevel} | Tagit: {item.tags.join(", ")}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      {craftedItemsData.length > 0 && (
        <ComparisonTool
          items={craftedItemsData.filter((item) => comparing.includes(item.id))}
          onRemoveItem={toggleCompare}
        />
      )}
      <div className="mt-8">
        {filteredItems.map((item) => (
          <CraftedItemResult
            key={item.id}
            item={item}
            onToggleFavorite={toggleFavorite}
            onToggleCompare={toggleCompare}
            isFavorite={favorites.includes(item.id)}
            isComparing={comparing.includes(item.id)}
          />
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          Hakuasi vastaavia reseptejä ei löytynyt.
        </p>
      )}
    </div>
  );
}
