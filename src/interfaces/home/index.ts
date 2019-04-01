export interface BannerItem {
  src: string;
  link: string;
}

export interface HomeState {
  banners: BannerItem[];
  mars: any[];
  venus: any[];
}

export interface FeatureItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  hoverImg?: string;
}
