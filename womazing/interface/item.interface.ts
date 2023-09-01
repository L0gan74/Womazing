export interface IItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface IItemData {
  items: IItem[];
}

export interface IItemDataSingle {
  item: IItem;
}

export interface Root {
  id: number
  title: string
  categoryId: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  size: string[]
}

export interface Rating {
  rate: number
  count: number
}

export interface RootData {
  item: Root;
}
