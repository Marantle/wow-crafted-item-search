import { CraftedItem, Material, SkillBooster } from "@/types/craftingTypes";

export const materials: Material[] = [
    { id: 221757, name: "Gloomfathom Hide" },
    { id: 212667, name: "Gloom Chitin" },
    { id: 219883, name: "Crystalfused Hide" },
    { id: 219889, name: "Sporecoated Hide" },
    { id: 219898, name: "Chitin Armor Banding" },
    { id: 212664, name: "Stormcharged Leather" },
    { id: 5, name: "Serevite Ore" },
    { id: 6, name: "Mireslush Hide" },
  ];

  
export const craftedItemsData: CraftedItem[] = [
  {
    id: 1,
    name: "Glyph-Etched Binding",
    materials: [
      { materialId: 221757, quantity: 1, quality: 3 },
      { materialId: 212667, quantity: 150, quality: 3 },
      { materialId: 219883, quantity: 1, quality: 2 },
      { materialId: 219898, quantity: 1, quality: 2 },
    ],
    embellishedQuality: 2,
    missiveQuality: 3,
    concentrate: 0,
    crafter: "Inath",
    realm: "Sylvanas",
    tags: ["mail", "belt"],
    skillBoosterId: 1010,
    itemLevel: 636,
  },
  {
    id: 2,
    name: "Glyph-Etched Stompers",
    materials: [
      { materialId: 221757, quantity: 1, quality: 0 },
      { materialId: 212667, quantity: 150, quality: 3 },
      { materialId: 219889, quantity: 3, quality: 3 },
      { materialId: 219898, quantity: 1, quality: 2 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    crafter: "Inath",
    realm: "Sylvanas",
    tags: ["mail", "boots"],
    concentrate: 0,
    skillBoosterId: 1010,
    itemLevel: 636,
  },
  {
    id: 3,
    name: "Tracker's Chitin Galoshes",
    materials: [
      { materialId: 212667, quantity: 2, quality: 1 },
      { materialId: 212667, quantity: 18, quality: 3 },
      { materialId: 212664, quantity: 10, quality: 2 },
    ],
    embellishedQuality: 1,
    missiveQuality: 1,
    crafter: "Inath",
    realm: "Sylvanas",
    tags: ["mail", "boots"],
    concentrate: 0,
    skillBoosterId: 1010,
    itemLevel: 590,
  },
  {
    id: 31,
    name: "Ironclaw Sword",
    materials: [
      { materialId: 5, quantity: 10, quality: 2 },
      { materialId: 6, quantity: 2, quality: 0 },
    ],
    embellishedQuality: 1,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "sword"],
    itemLevel: 590,
  },
  {
    id: 41,
    name: "Ironclaw Dirk",
    materials: [
      { materialId: 5, quantity: 8, quality: 2 },
      { materialId: 6, quantity: 1, quality: 0 },
    ],
    embellishedQuality: 1,
    missiveQuality: 1,
    concentrate: 30,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "dagger"],
    itemLevel: 590,
  },
  {
    id: 51,
    name: "Ironclaw Great Axe",
    materials: [
      { materialId: 5, quantity: 15, quality: 1 },
      { materialId: 6, quantity: 3, quality: 0 },
    ],
    embellishedQuality: 2,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["two-handed", "axe"],
    skillBoosterId: 1020,
    itemLevel: 590,
  },
];

export const skillBoosters: SkillBooster[] = [
  {
    id: 1010,
    name: "Unraveled Instructions",
    shortName: "Unraveled Instr.",
    skillBonus: 20,
    wowheadLink: "https://www.wowhead.com/item=225672/unraveled-instructions",
  },
  {
    id: 1020,
    name: "Stack of Pentagold Reviews",
    shortName: "Pentagold Reviews",
    skillBonus: 10,
    wowheadLink:
      "https://www.wowhead.com/item=225671/stack-of-pentagold-reviews",
  },
  {
    id: 1030,
    name: "Apprentice's Crafting Licence",
    shortName: "Apprentice Licence",
    skillBonus: 5,
    wowheadLink:
      "https://www.wowhead.com/item=225670/apprentices-crafting-license",
  },
];
