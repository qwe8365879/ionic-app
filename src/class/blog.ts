import { Media } from './media';
export class Blog {
    id: number;
    author_id: number;
    title: string;
    description?: string;
    slug: string;
    categories?: number[];
    tags?: string[];
    featuredMediaID?: number;
    featuredMedia?: Media;
    createdAt?: string;
    updatedAt?: string;
    
}