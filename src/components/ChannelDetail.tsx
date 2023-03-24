import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'
import zIndex from '@mui/material/styles/zIndex'
import { ChannelSearchResult, SearchResult } from '../utils/types'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams<{ id: string }>()
    console.log(channelDetail)
    useEffect(() => {
        fetchFromAPI(`/channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))
        fetchFromAPI(`/search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id])
    return (
        <Box minHeight={'95vh'}>
            <Box>
                <div style={{
                    background: `linear-gradient(90deg, rgba(5,13,75,1) 0%, rgba(121,9,22,0.7721463585434174) 100%`,
                    zIndex: 10,
                    height: '300px',
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
            </Box>
            <Box p={2} display="flex" >
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />

            </Box>
        </Box>

    )
}

export default ChannelDetail
