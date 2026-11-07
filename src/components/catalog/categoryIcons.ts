import {
  Beef,
  BrickWall,
  Coffee,
  Droplets,
  Factory,
  Fish,
  Leaf,
  Snowflake,
  Sprout,
  Trees,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import type { CategoryIcon } from "@/types";

export const categoryIcons: Record<CategoryIcon, LucideIcon> = {
  sprout: Sprout,
  snowflake: Snowflake,
  coffee: Coffee,
  wheat: Wheat,
  droplets: Droplets,
  leaf: Leaf,
  fish: Fish,
  beef: Beef,
  trees: Trees,
  brick: BrickWall,
  factory: Factory,
};
