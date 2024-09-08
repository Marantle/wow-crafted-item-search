export interface Material {
  id: number;
  name: string;
}

export interface SkillBooster {
  id: number;
  name: string;
  shortName: string;
  skillBonus: number;
  wowheadLink: string;
}

export interface CraftedItemMaterial {
  materialId: number;
  quantity: number;
  quality: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface CraftedItem {
  id: number;
  name: string;
  materials: CraftedItemMaterial[];
  embellishedQuality: 1 | 2 | 3;
  missiveQuality: 1 | 2 | 3;
  concentrate?: number;
  crafter: string;
  realm: string;
  tags: string[];
  skillBoosterId?: number;
  itemLevel: number;
}
