import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from '../utils/Constants'
import { VideoCardProps } from '../utils/types'

const VideoCard = ({ video }: VideoCardProps) => {
  const { id: { videoId }, snippet } = video
  console.log(videoId, snippet)
  return (
    <Card sx={{ width: '320px', boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography gutterBottom variant="subtitle1" fontWeight="bold" color="#FFF" component="div">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography gutterBottom variant="subtitle2" fontWeight="bold" color="gray" component="div">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
        {/* <Typography variant="body2" color="text.secondary">
          {video.snippet.description}
        </Typography> */}
      </CardContent>
    </Card>
  )
}

export default VideoCard
