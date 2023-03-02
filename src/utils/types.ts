export interface ChannelSearchResult {
    kind: 'youtube#searchResult';
    id: {
        kind: 'youtube#channel';
        channelId: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
            medium: {
                url: string;
            };
            high: {
                url: string;
            };
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    };
}

export interface VideoSearchResult {
    kind: 'youtube#searchResult';
    id: {
        kind: 'youtube#video';
        videoId: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            };
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    };
}

export type SearchResult = ChannelSearchResult | VideoSearchResult;

export interface VideoCardProps {
    video: VideoSearchResult
}

export interface ChannelCardProps {
    channelDetail: ChannelSearchResult;
}