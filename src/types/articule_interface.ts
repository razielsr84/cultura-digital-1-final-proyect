import type { Subtheme } from "./subtheme_interface";

export interface Articule {
  id: number;
  title: string;
  slug: string;
  images_path: readonly string[];
  info: string;
  subthemes: readonly Subtheme[];
}

export interface ArticuleListProps {
  articules: readonly Articule[];
}

export interface ArticuleCardProps {
  articule: Articule;
}
