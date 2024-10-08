import { CraftedItem, Material, SkillBooster } from "@/types/craftingTypes";

export const materials: Material[] = [
  { id: 221757, name: "Gloomfathom Hide" },
  { id: 212667, name: "Gloom Chitin" },
  { id: 219880, name: "Carapace-Backed Hide" },
  { id: 219883, name: "Crystalfused Hide" },
  { id: 219889, name: "Sporecoated Hide" },
  { id: 219898, name: "Chitin Armor Banding" },
  { id: 212664, name: "Stormcharged Leather" },
  { id: 210936, name: "Ironclaw Ore" },
  { id: 222417, name: "Core Alloy" },
  { id: 222420, name: "Charged Alloy" },
  { id: 219013, name: "Superb Beast Fang" },
  { id: 219903, name: "Storm-Touched Weapon Wrap" },
  { id: 222423, name: "Sanctified Alloy" },
  { id: 220192, name: "Ironclaw Alloy" },
  { id: 222558, name: "Boundless Cipher" },
  { id: 210808, name: "Arathor's Spear" },
  { id: 222555, name: "Codified Greenwood" },
  { id: 213611, name: "Writhing Sample" },
];

export const craftedItemsData: CraftedItem[] = [
  {
    id: 222568,
    name: "Vagabond's Bounding Baton",
    materials: [
      { materialId: 213611, quantity: 20, quality: 0 },
      { materialId: 222558, quantity: 10, quality: 3 },
      { materialId: 222555, quantity: 3, quality: 2 },
      { materialId: 222555, quantity: 12, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    concentrate: 0,
    skillBoosterId: 1010,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["staff", "intellect"],
    itemLevel: 619,
  },
  {
    id: 217140,
    name: "Algari-Competitor's Gauntlets, Treads, Girdle",
    materials: [
      { materialId: 219880, quantity: 20, quality: 3 },
      { materialId: 219880, quantity: 1, quality: 3 },
      { materialId: 212667, quantity: 75, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    concentrate: 0,
    crafter: "Inath",
    realm: "Sylvanas",
    tags: ["mail", "belt", "boots", "gloves"],
    itemLevel: 610,
  },
  {
    id: 219339,
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
    id: 219335,
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
    id: 219473,
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
    itemLevel: 590,
  },
  {
    id: 219485,
    name: "Tracker's Toughened Girdle",
    materials: [
      { materialId: 212667, quantity: 30, quality: 3 },
      { materialId: 212664, quantity: 10, quality: 3 },
    ],
    embellishedQuality: 1,
    missiveQuality: 2,
    crafter: "Inath",
    realm: "Sylvanas",
    tags: ["mail", "belt"],
    concentrate: 0,
    itemLevel: 590,
  },
  {
    id: 222447,
    name: "Charged Claymore",
    materials: [
      //   { id: 219903, name: "Storm-Touched Weapon Wrap" },
      //   { id: 222423, name: "Sanctified Alloy" },
      //   { id: 222420, name: "Charged Alloy" },
      { materialId: 219903, quantity: 1, quality: 2 },
      { materialId: 222423, quantity: 6, quality: 3 },
      { materialId: 222420, quantity: 12, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["two-hand", "sword", "strength"],
    skillBoosterId: 1010,
    itemLevel: 636,
  },
  {
    id: 222444,
    name: "Charged Hexsword",
    materials: [
      // { id: 219013, name: "Superb Beast Fang" },
      // { id: 219903, name: "Storm-Touched Weapon Wrap" },
      // { id: 222423, name: "Sanctified Alloy" },
      // { id: 222420, name: "Charged Alloy" },
      { materialId: 219013, quantity: 1, quality: 0 },
      { materialId: 219903, quantity: 1, quality: 3 },
      { materialId: 222423, quantity: 5, quality: 3 },
      { materialId: 222420, quantity: 10, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "sword", "intellect"],
    skillBoosterId: 1010,
    itemLevel: 636,
  },
  {
    id: 222439,
    name: "Everforged Dagger",
    materials: [
      // { id: 219013, name: "Superb Beast Fang" },
      // { id: 219903, name: "Storm-Touched Weapon Wrap" },
      // { id: 222423, name: "Sanctified Alloy" },
      // { id: 220192, name: "Ironclaw Alloy" },
      { materialId: 219013, quantity: 1, quality: 0 },
      { materialId: 219903, quantity: 1, quality: 3 },
      { materialId: 222423, quantity: 6, quality: 3 },
      { materialId: 220192, quantity: 10, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "dagger", "intellect"],
    skillBoosterId: 1020,
    concentrate: 215,
    itemLevel: 636,
  },
  {
    id: 222441,
    name: "Everforged Warglaive",
    materials: [
      // { id: 219013, name: "Superb Beast Fang" },
      // { id: 219903, name: "Storm-Touched Weapon Wrap" },
      // { id: 222423, name: "Sanctified Alloy" },
      // { id: 220192, name: "Ironclaw Alloy" },
      { materialId: 219013, quantity: 1, quality: 0 },
      { materialId: 219903, quantity: 1, quality: 3 },
      { materialId: 222423, quantity: 10, quality: 3 },
      { materialId: 220192, quantity: 3, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "glaive", "agility"],
    skillBoosterId: 1020,
    itemLevel: 636,
  },
  {
    id: 222440,
    name: "Everforged Longsword",
    materials: [
      // { id: 219013, name: "Superb Beast Fang" },
      // { id: 219903, name: "Storm-Touched Weapon Wrap" },
      // { id: 222423, name: "Sanctified Alloy" },
      // { id: 220192, name: "Ironclaw Alloy" },
      { materialId: 219013, quantity: 1, quality: 0 },
      { materialId: 219903, quantity: 1, quality: 3 },
      { materialId: 222423, quantity: 5, quality: 3 },
      { materialId: 220192, quantity: 12, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "sword", "agility", "intellect"],
    skillBoosterId: 1020,
    itemLevel: 636,
  },
  {
    id: 222566,
    name: "Vagabond's Torch",
    materials: [
      // { id: 210808, name: "Arathor's Spear" },
      // { id: 222558, name: "Boundless Cipher" },
      { materialId: 210808, quantity: 10, quality: 1 },
      { materialId: 222558, quantity: 6, quality: 3 },
    ],
    embellishedQuality: 3,
    missiveQuality: 3,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["off-hand", "intellect"],
    skillBoosterId: 1020,
    itemLevel: 636,
  },
  {
    id: 222565,
    name: "Inquisitor's Torch",
    materials: [
      // { id: 210808, name: "Arathor's Spear" },
      // { id: 222558, name: "Boundless Cipher" },
      { materialId: 210808, quantity: 1, quality: 1 },
      { materialId: 222558, quantity: 1, quality: 3 },
    ],
    embellishedQuality: 1,
    missiveQuality: 1,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["off-hand", "intellect"],
    itemLevel: 590,
  },
  {
    id: 222570,
    name: "Inquisitor's Baton",
    materials: [
      // { id: 210808, name: "Arathor's Spear" },
      // { id: 222558, name: "Boundless Cipher" },
      { materialId: 210808, quantity: 4, quality: 3 },
      { materialId: 222558, quantity: 1, quality: 3 },
    ],
    embellishedQuality: 2,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["staff", "intellect"],
    itemLevel: 590,
  },
  {
    id: 222569,
    name: "Inquisitor's Crutch",
    materials: [
      // { id: 210808, name: "Arathor's Spear" },
      // { id: 222558, name: "Boundless Cipher" },
      { materialId: 210808, quantity: 4, quality: 3 },
      { materialId: 222558, quantity: 1, quality: 3 },
    ],
    embellishedQuality: 2,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["staff", "agility"],
    itemLevel: 590,
  },
  {
    id: 217916,
    name: "Ironclaw Sword",
    materials: [
      { materialId: 210936, quantity: 3, quality: 2 },
      { materialId: 210936, quantity: 5, quality: 3 },
      { materialId: 222417, quantity: 1, quality: 2 },
    ],
    embellishedQuality: 1,
    missiveQuality: 1,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "sword", "strength"],
    itemLevel: 590,
  },
  {
    id: 222465,
    name: "Ironclaw Dirk",
    materials: [
      { materialId: 210936, quantity: 5, quality: 2 },
      { materialId: 222417, quantity: 1, quality: 3 },
    ],
    embellishedQuality: 2,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "dagger", "agility"],
    itemLevel: 590,
  },
  {
    id: 222464,
    name: "Ironclaw Stiletto",
    materials: [
      { materialId: 210936, quantity: 5, quality: 2 },
      { materialId: 222417, quantity: 1, quality: 3 },
    ],
    embellishedQuality: 2,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "dagger", "intellect"],
    itemLevel: 590,
  },
  {
    id: 222467,
    name: "Ironclaw Knuckles",
    materials: [
      { materialId: 210936, quantity: 5, quality: 2 },
      { materialId: 222417, quantity: 1, quality: 3 },
    ],
    embellishedQuality: 2,
    missiveQuality: 2,
    crafter: "Thraut",
    realm: "Sylvanas",
    tags: ["one-hand", "fist-weapon", "agility"],
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
