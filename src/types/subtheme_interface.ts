export interface Subtheme {
  id: number;
  title: string;
  info: string;
  image_path: string;
}

export interface SubthemeListProps {
  subthemes: readonly Subtheme[];
}

export interface SubthemeCardProps {
  subtheme: Subtheme;
}
