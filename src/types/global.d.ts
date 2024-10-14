declare interface ProductData {
    id: number;
    productGroup: string; // define enum from product group?
    brand: string; // define enum from brand list?
    code: string;
    name: string;
    shortDescription: string;
    orderCount: number; 
    productVariants: ProductVariant[];
}
declare interface APIProductData {
    content: ProductData[];
    page: {
      size: number;
      number: number;
      totalElements: number;
      totalPages: number;
    };
  }

declare interface ProductVariant {
    color: string;
    imgUrl: string;
    monthlyPrice: number;
    defaultVariant: boolean;
    stock:StockOption[];
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
declare interface ProductCardProps extends Omit<ProductData, 'code' | 'orderCount' | 'productGroup'> {
}

declare interface HeroSectionProps {
    title: string;
    description: string;
}

declare type SortOption =
    | 'Most popular'
    | 'Price: lowest to highest'
    | 'Price: highest to lowest';

declare interface StockOption {
    qtyInStock: number;
    }    

declare interface AvailableOptions {
    types: string[];
    brands: string[];
    priceRanges: string[];
    colors: string[];
    stock: StockOption[];
    }

declare interface Filter {
    types: string[];
    brands: string[];
    priceRanges: string[];
    colors: string[];
    stock: StockOption[];
    isModalOpen: boolean;
    availableOptions?: AvailableOptions;
}
