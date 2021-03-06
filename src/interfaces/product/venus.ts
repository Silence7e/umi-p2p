export interface VenusProduct {
  id: number;
  title: string;
  desc: string;
  rate: number;
  time: number | string;
  status: {
    value: string;
    desc: string;
  };
  statusDesc: string;
  link: string;
  icon?: any;
}

export interface VenusState {
  list: VenusProduct[];
  offset: number;
  size: number;
}
