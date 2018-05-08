export interface Media{
    id: number;
    title?: string;
    details?: {
        [size: string]: {
            file: string,
            width: number,
            height: number,
            mime_type: string,
            source_url: string
        }
    };
}