import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { materials } from "@/data/craftedItems";

const convertToValidFileName = (name: string): string => {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") + ".jpg"
  );
};

const materialIconMap = new Map(
  materials.map((material) => [
    material.id,
    convertToValidFileName(material.name),
  ])
);

export function getMaterialIconFilename(materialId: number): string {
  return materialIconMap.get(materialId) || "default_icon.jpg";
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIconFilename(materialName: string) {
  return materialName.toLowerCase().replace(/ /g, "_") + ".jpg";
}
