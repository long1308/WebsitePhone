export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: Images[],
    brand: { id: number, name: string, slug: string },
    specifications: ISpecification[]
}
export interface Images {

    base_url: string;
    is_gallery: boolean;
    label: string | null;
    large_url: string;
    medium_url: string;
    
    position: number | null;
    small_url: string;
    thumbnail_url: string;

}
export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}