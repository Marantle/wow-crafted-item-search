import Image from "next/image";
import { Star, Sparkles, Beaker, BookOpen, ExternalLink, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { SkillBooster } from "@/types/craftingTypes";

interface ItemBadgesProps {
  itemLevel: number;
  embellishedQuality: 1 | 2 | 3;
  missiveQuality: 1 | 2 | 3;
  concentrate?: number;
  skillBooster?: SkillBooster;
  tags: string[];
  className?: string;
}

export default function ItemBadges({
  itemLevel,
  embellishedQuality,
  missiveQuality,
  concentrate,
  skillBooster,
  tags,
  className = "",
}: ItemBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Badge variant="secondary" className="flex items-center font-bold">
        {itemLevel}
      </Badge>
      <Badge variant="secondary" className="flex items-center">
        <Star className="w-4 h-4 mr-1 flex-shrink-0" />
        <span className="mr-1">Embellished</span>
        <Image
          src={`/icons/${embellishedQuality}.png`}
          alt={`Quality ${embellishedQuality}`}
          width={embellishedQuality === 1 ? 12 : 24}
          height={embellishedQuality === 1 ? 12 : 24}
          className="ml-1"
        />
      </Badge>
      <Badge variant="secondary" className="flex items-center">
        <Sparkles className="w-4 h-4 mr-1 flex-shrink-0" />
        <span className="mr-1">Missive</span>
        <Image
          src={`/icons/${missiveQuality}.png`}
          alt={`Quality ${missiveQuality}`}
          width={missiveQuality === 1 ? 12 : 24}
          height={missiveQuality === 1 ? 12 : 24}
          className="ml-1"
        />
      </Badge>
      {concentrate !== undefined && concentrate > 0 && (
        <Badge variant="secondary" className="flex items-center">
          <Beaker className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">Concentrate {concentrate}</span>
        </Badge>
      )}
      {skillBooster && (
        <Badge variant="secondary" className="flex items-center">
          <BookOpen className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{skillBooster.shortName}</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="p-0 h-6 w-6 ml-1">
                <Info className="h-4 w-4" />
                <span className="sr-only">Skill Booster Info</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
              <p>
                {skillBooster.name}: +{skillBooster.skillBonus} skill
              </p>
              <a
                href={skillBooster.wowheadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center mt-2"
              >
                View on Wowhead
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </PopoverContent>
          </Popover>
        </Badge>
      )}
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}