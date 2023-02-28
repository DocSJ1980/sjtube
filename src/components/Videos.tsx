import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import { SearchResult, VideoSearchResult, ChannelSearchResult } from './Feed';

interface Props {
    videos: SearchResult[];
}

// function isVideoSearchResult(result: SearchResult): result is VideoSearchResult {
//     return result.id.kind === 'youtube#video';
//   }

//   function isChannelSearchResult(result: SearchResult): result is ChannelSearchResult {
//     return result.id.kind === 'youtube#channel';
//   }


const Videos = ({ videos }: Props) => {
    console.log(videos)
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {videos.map((video, idx) => (
                <Box key={idx}>
                    {video.id.kind === 'youtube#video' && (
                        <VideoCard video={(video as VideoSearchResult)} />
                    )}
                    {video.id.kind === 'youtube#channel' && (
                        <ChannelCard channelDetail={(video as ChannelSearchResult)} />
                    )}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
