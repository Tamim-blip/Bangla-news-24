export type TNewsDetails = {
    id: string;
    title: string;

    description: {
        blocks: {
            type: string;
            model?: {
                blocks?: {
                    type: string;
                    model?: {
                        text?: string;
                    };
                }[];
            };
        }[];
    };

    imageUrl: string;

    body: {
        type: "text" | "image" | "subheading";
        text?: string;
        url?: string;
        width?: number;
        height?: number;
        caption?: string;
        altText?: string;
        copyrightHolder?: string;
    }[];

    byline: {
        name: string;
        role: string;
    }[];

    topics: {
        id: string;
        name: string;
    }[];

    firstPublished: string;
    lastPublished: string;

    source: string;
    sourceUrl: string;
    link: string;
    wordCount: number;
};