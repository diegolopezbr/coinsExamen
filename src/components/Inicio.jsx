import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export const Inicio = ({ likes, toggleLike }) => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();

      })
      .then((data) => {
        setCoins(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 2 }}>
      {coins.map((coin)=>{
       return (
        
        <Card key={coin.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 2, pr: 1, borderRadius: 3, transition: 'all 0.2s ease', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)' } }}>
        <a style={{cursor:'pointer', flexGrow:1, padding:'16px 0', display:'flex', alignItems:'center'}} onClick={ ()=> navigate("/detail/"+coin.id)}> <Avatar src={coin.image} alt={coin.id} sx={{ width: 40, height: 40, mr: 2 }} /> <Typography variant="subtitle1" sx={{ fontWeight: 500, textTransform: 'capitalize' }}>{coin.id}</Typography> </a>
        <IconButton onClick={()=> toggleLike(coin)}>
          {likes.some((l)=> l.id === coin.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        </Card>
        
       )
           })}
    </Box>
  )
}
