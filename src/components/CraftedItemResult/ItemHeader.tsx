import { useState, useEffect, RefObject } from "react";
import { Hammer, User, Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ItemHeaderProps {
  name: string;
  crafter: string;
  realm: string;
  titleRef: RefObject<HTMLHeadingElement>;
}

export default function ItemHeader({
  name,
  crafter,
  realm,
  titleRef,
}: ItemHeaderProps) {
  const [isTitleTruncated, setIsTitleTruncated] = useState(false);

  useEffect(() => {
    const checkTruncation = () => {
      if (titleRef.current) {
        setIsTitleTruncated(
          titleRef.current.scrollWidth > titleRef.current.clientWidth
        );
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [titleRef]);

  return (
    <>
      <div className="flex items-center mb-2">
        <Hammer className="w-5 h-5 mr-2 flex-shrink-0" />
        <h2
          ref={titleRef}
          className="text-lg sm:text-xl font-semibold truncate"
        >
          {name}
        </h2>
        {isTitleTruncated && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="p-0 h-6 w-6 ml-1">
                <Info className="h-4 w-4" />
                <span className="sr-only">Item Name Info</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
              <p>{name}</p>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <div className="flex items-center mb-2 text-sm text-muted-foreground">
        <User className="w-4 h-4 mr-1 flex-shrink-0" />
        <span className="truncate">
          {crafter} ({realm})
        </span>
      </div>
    </>
  );
}
