import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from '../utils/Constants'
import { Box } from '@mui/system'
import { ChannelCardProps } from '../utils/types'


const ChannelCard = ({ channelDetail }: ChannelCardProps) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        // alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', width: '180px', height: '180px' }}
                    />

                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard
