import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from '../utils/Constants'
import { Box } from '@mui/system'
import { ChannelSearchResult } from '../utils/types'
interface ChannelCardProps {
    channelDetail: ChannelSearchResult,
    marginTop: string
}

const ChannelCard = ({ channelDetail, marginTop }: ChannelCardProps,) => {
    // console.log("Channel Detail:", channelDetail)
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                width: { xs: '356px', md: '320px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '326px',
                margin: 'auto',
                marginTop,
            }}
        >
            <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        // alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                </CardContent>
                <Typography variant='subtitle1' fontWeight='bold' color='gray'>
                    {channelDetail?.snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                    {channelDetail?.snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{
                        fontSize: '12px',
                        color: 'gray',
                        ml: '5px',
                    }} />
                </Typography>
            </Link>
        </Box>

    )
}

export default ChannelCard
