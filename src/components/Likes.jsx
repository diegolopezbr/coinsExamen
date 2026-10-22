import React from 'react'
import { useNavigate } from 'react-router'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export const Likes = ({ likes, toggleLike }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 2 }}>
      {likes.map((like)=>{
        return (
          <Card key={like.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 2, pr: 1, borderRadius: 3, transition: 'all 0.2s ease', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)' } }}>
          <a style={{cursor:'pointer', flexGrow:1, padding:'16px 0', display:'flex', alignItems:'center'}} onClick={ ()=> navigate("/detail/"+like.id)}> <Avatar src={like.image} alt={like.id} sx={{ width: 40, height: 40, mr: 2 }} /> <Typography variant="subtitle1" sx={{ fontWeight: 500, textTransform: 'capitalize' }}>{like.id}</Typography> </a>
          <IconButton onClick={()=> toggleLike(like)}>
            <FavoriteIcon color="error" />
          </IconButton>
          </Card>
        )
      })}
    </Box>
  )
}
