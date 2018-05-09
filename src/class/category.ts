import { Media } from './media';
export interface Category {
    id: number;
    name: string;
    description?: string;
    count?: number;
    parents?: number[];
    taxonomy?: string;
}