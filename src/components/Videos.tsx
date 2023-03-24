import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import { SearchResult, VideoSearchResult, ChannelSearchResult } from './../utils/types';

interface Props {
    videos: SearchResult[],
    direction: 'row' | 'column',
}


const Videos = ({ videos, direction }: Props) => {
    // console.log(videos)
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
            {videos.map((video, idx) => (
                <Box key={idx}>
                    {video.id.kind === 'youtube#video' && (
                        <VideoCard video={video as VideoSearchResult} />
                    )}
                    {video.id.kind === 'youtube#channel' && (
                        <ChannelCard channelDetail={video as ChannelSearchResult} marginTop="0" />
                    )}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
