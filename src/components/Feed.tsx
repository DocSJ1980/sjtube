import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

interface ChannelSearchResult {
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

interface VideoSearchResult {
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


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState<SearchResult[]>([])
    useEffect(() => {
        fetchFromAPI(`/search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])
    return (
        <Stack
            sx={{ flexDirection: { sx: 'column', md: 'row' } }}
        >
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2023 sjCreations.
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{ color: 'white' }}
                >
                    {selectedCategory}
                    <span style={{ color: '#FC1503' }}> Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
