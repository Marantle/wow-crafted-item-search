import { useState, useEffect } from "react";
import { CraftedItem } from "@/types/craftingTypes";

export function useTruncation(
  titleRef: React.RefObject<HTMLHeadingElement>,
  materialRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>,
  item: CraftedItem
) {
  const [isTitleTruncated, setIsTitleTruncated] = useState(false);
  const [truncatedMaterials, setTruncatedMaterials] = useState<number[]>([]);

  useEffect(() => {
    const checkTruncation = () => {
      if (titleRef.current) {
        setIsTitleTruncated(
          titleRef.current.scrollWidth > titleRef.current.clientWidth
        );
      }

      const newTruncatedMaterials = materialRefs.current.map((ref, index) =>
        ref ? ref.scrollWidth > ref.clientWidth : false
      );
      setTruncatedMaterials(
        newTruncatedMaterials
          .map((isTruncated, index) => (isTruncated ? index : -1))
          .filter((index) => index !== -1)
      );
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [item, titleRef, materialRefs]);

  return { isTitleTruncated, truncatedMaterials };
}
