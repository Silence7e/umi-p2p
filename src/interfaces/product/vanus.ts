export interface VanusProduct {
  id: number;
  title: string;
  desc: string;
  rate: number | string;
  time: number | string;
  status: string;
  icon?: any;
}

export interface VanusState {
  list: VanusProduct[];
  offset: number;
  size: number;
}
