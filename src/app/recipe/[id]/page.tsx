import { Metadata } from "next";
import { craftedItemsData } from "@/data/craftedItems";
import RecipePageClient from "./RecipePageClient";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const itemId = parseInt(params.id, 10);
  const item = craftedItemsData.find(
    (craftedItem) => craftedItem.id === itemId
  );

  if (!item) {
    return {};
  }

  const title = `${item.name} - Maakon Budjettireseptit`;
  const description = `${item.name} (Item Level ${item.itemLevel}) by ${item.crafter}`;

  // Fallback to a relative URL if NEXT_PUBLIC_BASE_URL is not set
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const ogImageUrl = `${baseUrl}/api/og/${itemId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const itemId = parseInt(params.id, 10);
  const item = craftedItemsData.find(
    (craftedItem) => craftedItem.id === itemId
  );

  return <RecipePageClient item={item} />;
}
