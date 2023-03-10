import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from '../utils/Constants'
import { Box } from '@mui/system'
import { ChannelCardProps } from '../utils/types'


const ChannelCard = ({ channelDetail }: ChannelCardProps) => {
    console.log("Channel Detail:", channelDetail)
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                width: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        // alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3' }}
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
