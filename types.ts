export interface Coupon {
  id: string;
  title: string;
  desc: string;
  validUntil?: string;
  color: string;
  icon: string;
}

export interface Memory {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  rotation: string;
}

export interface CrosswordCell {
  char: string;
  number?: number;
  isBlocked: boolean;
}